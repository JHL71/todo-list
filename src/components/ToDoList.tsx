import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);  
  const setCategory = useSetRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget: { value } } = event;
    setCategory(value as Categories);
  }
  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <select onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <hr />
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </div>
  )
}

export default ToDoList;