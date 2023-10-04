import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoriesState, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const DeleteButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`

const Li = styled.li`
  margin-bottom: 10px;
`

const ToDoWrap = styled.div`
  width: 100%;
  padding-left: 10px;
`

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(CategoriesState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos(oldToDos => {
      return oldToDos.map((todo) => {
        return todo.id === id ? {...todo, category: newCategory} : todo;
      })
    });
  }
  const deleteToDo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToDos(oldToDos => oldToDos.filter((toDo) => toDo.id !== id))
  }

  return (
    <Li>
      <ToDoWrap>
      <div>
        {text} 
        <DeleteButton onClick={deleteToDo}>⛔️</DeleteButton>
      </div>
      <div>
      {categories
        .filter((elCategory) => elCategory !== category)
        .map(flt => {
          return (
            <button key={flt + 'ii'} onClick={() => onClick(flt)}>{flt}</button>
          )
        })
      }
      </div>
      </ToDoWrap>
    </Li>
  )
}

export default ToDo;