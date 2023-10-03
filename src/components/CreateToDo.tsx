import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";


interface IForm {
  toDo: string;
}


const CreateToDo = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>()

  const handleValid = ({ toDo }: IForm) => {
    console.log('add to do', toDo);
    setToDos(prev => [{text: toDo, id: Date.now(), category: "TO_DO"}, ...prev]);
    setValue("toDo", "");
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("toDo", {
        required: "Please wriet a to do"
      })} placeholder="Write a to do"/>
      <button>add</button>
    </form>
  )
}


export default CreateToDo;