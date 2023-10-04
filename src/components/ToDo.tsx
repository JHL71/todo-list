import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";


const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos(oldToDos => {
      return oldToDos.map((todo) => {
        return todo.id === id ? {...todo, category: newCategory} : todo;
      })
    });
  }

  return (
    <li>
      {text}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO &&(
        <button onClick={() => onClick(Categories.TO_DO)}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>
          Done
        </button>
      )}
    </li>
  )
}

export default ToDo;