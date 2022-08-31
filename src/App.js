import './App.css';
import Task1 from './FunctionalComponent/Task1';
import Task2 from './FunctionalComponent/Task2';
import Task3 from './FunctionalComponent/Task3';
function App() {
  return (
    <>
      <p>Without Arrow Function</p>
       <Task1></Task1>
       <p>With Arrow Function</p>
       <Task2></Task2>
       <p>Using props</p>
       <Task3 name="World"></Task3>  
    </>
  );
}
export default App;
