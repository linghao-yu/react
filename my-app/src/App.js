import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from "./TodoList";
class App extends Component{
  render(){
    const todoList = [
      'React practice',
      'game time'
    ];
    return (
      <div className="App">
        <TodoListHeader />
        <TodoList />
      </div>
    );
  }
}
// function App() {
//   const todoList = [
//     'React practice',
//     'game time'
//   ];
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h2>Todo List</h2>
//       {
//         todoList.map( item =><p>{item}</p>)
//       }
//     </div>
//   );
// }

export default App;
