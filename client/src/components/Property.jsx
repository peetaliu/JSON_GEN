import React, { useState } from 'react'

const Property = props => {
  const [type, setType] = useState('String')
  const [child, setChild] = useState(0)

  const handleChange = e => {
    setType(e.target.value)
  }

  const addChild = e => {
    console.log('addChild clicked')
  }
  return (
    <div>
      <select value={type} name='type' onChange={handleChange}>
        <option value='String'>String</option>
        <option value='Number'>Number</option>
        <option value='Boolean'>Boolean</option>
        <option value='Array'>Array</option>
        <option value='Object'>Object</option>
      </select>
      {type.match('Array') || type.match('Object') ? (
        <button onClick={addChild}>+</button>
      ) : null}
    </div>
  )
}

export default Property
