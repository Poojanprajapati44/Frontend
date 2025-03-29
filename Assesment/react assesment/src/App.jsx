import { useState } from 'react'
import './App.css'
import Checklist from './Checklist' 
import { ChecklistProvider } from "./Checklist";

function App() {

  return (
    <>
       <ChecklistProvider>
      <Checklist />
    </ChecklistProvider>
    </>
  )
}

export default App
