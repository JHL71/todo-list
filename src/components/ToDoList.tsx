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
  overflow: hidden;
  border: solid black 1px;
  border-radius: 15px;
  background-color: #74b9ff;
`

const Title = styled.h1`
  padding-top: 5px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const PaddingLeft = styled.div`
  padding-left: 10px;
`

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
`

const Ul = styled.ul`
  height: 50%;
  overflow: scroll;
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
      <PaddingLeft>
        <h2>Add Category</h2>
        <CreateCategory />
      </PaddingLeft>
      <hr />
      <PaddingLeft>
        <select onInput={onInput} defaultValue={"To Do"}>
          {categories?.map((category) => {
            return (
              <option key={category+'i'} value={category}>{category}</option>
            )
          })}
        </select>
        <CreateToDo />
      </PaddingLeft>
      <hr />
      <SubTitle>{category}</SubTitle>
      <br></br>
      <Ul>
        {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </Ul>
    </Wrap>
  )
}

export default ToDoList;