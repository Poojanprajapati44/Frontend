import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import store from './store'
import TodoList from './Todolist'
import Toolkitcrud from './Toolkitcrud'

function App() {


  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <Counter />
    </div> */}

{/* <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <TodoList />
    </div> */}
    <Toolkitcrud/>
    </>
  )
}

export default App
