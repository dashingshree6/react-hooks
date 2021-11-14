import React, {useReducer} from 'react';

export default function USEREDUCER(){
  const reducer = (state,action) => {
    switch (action.type) {
     case 'INCREMENT':
      return {counter: state.counter+1, coounter: state.coounter+1, showText: state.showText};
     case 'TOGGLE':
       return {counter: state.counter, coounter: state.coounter, showText: !state.showText};
     default: 
       return state; 
   }
  };
  const [state, dispatch] = useReducer(reducer, {counter: 1,coounter:2, showText: true})
  
  const handleClick = () => {
    dispatch({type: 'INCREMENT'});
    dispatch({type: 'TOGGLE'});
  }
  return (
    <div>
    <h2>useReducer Hook</h2>
    {state.counter}
    {state.coounter}
    <button onClick={handleClick}>+</button>
    {state.showText && <h3>'This is the text available'</h3>}       
    </div>
  )
} 