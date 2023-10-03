import styled from 'styled-components'
import ToDoList from './components/ToDoList';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

function App() {
  return (
    <>
      <Wrap>
        <ToDoList />
      </Wrap>
    </>
  );
}

export default App;
