import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);  

  console.log(toDos);
  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => {
          return (
            <ToDo key={toDo.id} {...toDo}/>
          )
          })}
      </ul>
    </div>
  )
}

export default ToDoList;