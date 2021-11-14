import React, {useState} from 'react';

export default function USESTATE(){
  const [counter, setCounter] = useState(1);
  const [inputValue, setInputValue] = useState('Null');

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
    <h2>useState Hook</h2>
    {counter}
    <button onClick={handleClick}>+</button><br/>
  
    <input onChange={handleChange} placeholder='Type input'/>
    {inputValue}
    </div>
  )
} 