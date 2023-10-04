import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { CategoriesState } from "../atoms";

interface ICategoryForm {
  category: string
}

const CreateCategory = () => {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const [categories, setCategories] = useRecoilState(CategoriesState);
  const handleValid = ({ category }:ICategoryForm) => {
    if (categories.includes(category)) return ;
    setCategories(prev => [category,...prev]);
    setValue("category", "");
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category", {
        required: "Please wriet a category"
      })} placeholder="Write a category"/>
      <button>add</button>
    </form>
  )
}


export default CreateCategory;