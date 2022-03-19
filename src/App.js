import React from 'react'
import './App.css'
import Header from './Components/Header'
import FormTodo from './Components/FormTodo'
// import Task from './Components/Task'
import TasksList from './Components/TasksList'


function App() {
  return (
    <div className="App">
      <Header/>
      <FormTodo/>
      <TasksList/>
    </div>
  )
}

export default App