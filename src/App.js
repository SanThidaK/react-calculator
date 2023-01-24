import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNumber } from './features/calculator/calculateSlice';

function App() {

  const [result, setResult] = React.useState(0);
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [type, setType] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const { number } = useSelector(state => state.calculator);
  const numbers = [
    1, 2, 3, 
    4, 5, 6, 
    7, 8, 9, 
    0, 
  ]
  const types = [
    '+', '-', '*', 'sub'
  ]

  const _setNumber = (num) => {
    type === null ? setNum1(num) : setNum2(num);
    // type !== null && number === null && dispatch(setNumber(num))
  }

  const calculate = () => {
    type === '+' && setResult(num1 + num2);
    type === '-' && setResult(num1 - num2);
    type === '*' && setResult(num1 * num2);
    type === 'subs' && setResult(num1 / num2);
    setShow(true);
  }

  const clear = () => {
    setResult(0);
    setNum1(0);
    setNum2(0);
    setShow(false);
  }

  const squareRoot = () => {
    setResult(Math.sqrt(num1))
  }

  const square = () => {
    setResult(Math.pow(num1, 2))
  }

  return (
    <div className='max-w-md m-auto mt-12'>
      <div className='border border-black rounded-lg p-2 max-w-sm'>
        <p className='text-right'>{ show && result } </p>
        <p className='text-right'>
          { !show && num1 !== 0 && num1 }
        </p>
        <p className='text-right'>
          { !show && type !== null && type }
        </p>
        <p className='text-right'>
          { !show && num2 !== 0 && num2 }
        </p>
      </div>
      <div className='flex flex-row flex-wrap'>
        <div onClick={() => clear()}
          className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 cursor-pointer text-center' 
        >
          C
        </div>
        <div onClick={() => squareRoot()}
          className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 cursor-pointer text-center' 
        >
          SqRt
        </div>
        <div onClick={() => square()}
          className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 cursor-pointer text-center' 
        >
          Sq
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='grid grid-cols-3 justify-center items-center max-w-sm'>
          {
            numbers.map((num, index) => 
              <div 
                className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 cursor-pointer text-center' 
                key={`number_${num}_${index}`}
                onClick={() => _setNumber(num)}
              >
                {num}
              </div>
            )
          }
        </div>
        <div>
          {
            types.map((ty, index) =>
              <div className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 text-center'
                onClick={() => setType(ty)}
              >
                {ty}
              </div>
            )
          }
          <div className='w-12 p-2 border border-black rounded-lg justify-center items-center m-2 text-center'
            onClick={() => calculate()}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
