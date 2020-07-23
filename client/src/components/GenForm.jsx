import React, { useState, useEffect } from 'react'
import Property from './Property'

const GenForm = () => {
  const [numProperty, setNumProperty] = useState(1)
  const [properties, setProperties] = useState([])

  useEffect(() => {
    mapProps()
  }, [numProperty])

  const mapProps = () => {
    let pArr = []
    console.log(numProperty)
    for (let i = 0; i < numProperty; i++) {
      pArr.push({ p: <Property />, key: i })
    }
    console.log('pArr: ', pArr)
    setProperties(pArr)
  }

  const handleInc = e => {
    e.preventDefault()
    setNumProperty(numProperty + 1)
  }

  return (
    <div>
      <ul>
        {properties.map(p => (
          <li key={p.key}>{p.p}</li>
        ))}
      </ul>
      <button onClick={handleInc}>Add Property</button>
    </div>
  )
}

export default GenForm
