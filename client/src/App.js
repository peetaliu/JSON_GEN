import React, { useState, useEffect } from 'react'
import GenForm from './components/GenForm'
import './App.css'

const App = () => {
  const [jsonObj, setJsonObj] = useState({})

  return <GenForm setObj={setJsonObj} />
}

export default App
