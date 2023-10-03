import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";


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
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>
          Doing
        </button>
      )}
      {category !== "TO_DO" &&(
        <button onClick={() => onClick("TO_DO")}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>
          Done
        </button>
      )}
    </li>
  )
}

export default ToDo;