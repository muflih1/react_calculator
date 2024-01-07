import React, { useState } from 'react'

export default function App() {
  const [value, setValue] = useState('')

  const handleClick = (e) => setValue(value + e.target.value)

  return (
    <div>
      <input type="text" value={value} readOnly />
      <div>
        <input type="button" value="AC" onClick={() => setValue('')} />
        <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
        <input type="button" value="." onClick={handleClick} />
        <input type="button" value="/" onClick={handleClick} />
      </div>
      <div>
        <input type="button" value="7" onClick={handleClick} />
        <input type="button" value="8" onClick={handleClick} />
        <input type="button" value="9" onClick={handleClick} />
        <input type="button" value="*" onClick={handleClick} />
      </div>
      <div>
        <input type="button" value="4" onClick={handleClick} />
        <input type="button" value="5" onClick={handleClick} />
        <input type="button" value="6" onClick={handleClick} />
        <input type="button" value="+" onClick={handleClick} />
      </div>
      <div>
        <input type="button" value="1" onClick={handleClick} />
        <input type="button" value="2" onClick={handleClick} />
        <input type="button" value="3" onClick={handleClick} />
        <input type="button" value="-" onClick={handleClick} />
      </div>
      <div>
        <input type="button" value="00" onClick={handleClick} />
        <input type="button" value="0" onClick={handleClick} />
        <input type="button" value="=" onClick={() => setValue(eval(value))} />
      </div>
    </div>
  )
}
