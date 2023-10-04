import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoriesState, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import styled from "styled-components";


const Wrap = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`


const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);  
  const setCategory = useSetRecoilState(categoryState);
  const category = useRecoilValue(categoryState);
  const categories = useRecoilValue(CategoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget: { value } } = event;
    setCategory(value);
  }
  return (
    <Wrap>
      <Title>Todos</Title>
      <hr />
      <h2>Add Category</h2>
      <CreateCategory />
      <hr />
      <select onInput={onInput} defaultValue={"To Do"}>
        {categories?.map((category) => {
          return (
            <option key={category+'i'} value={category}>{category}</option>
          )
        })}
      </select>
      <CreateToDo />
      <hr />
      <SubTitle>{category}</SubTitle>
      <br></br>
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </Wrap>
  )
}

export default ToDoList;