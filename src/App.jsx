
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PLUS_ONE, plustN } from './redux/modules/counter';
import { MINUS_ONE } from './redux/modules/counter';
import { plusOne } from './redux/modules/counter';
import { minusOne } from './redux/modules/counter';
import { useState } from 'react';
import { plusN } from './redux/modules/counter';
import { minusN } from './redux/modules/counter';

function App() {

  const [number, setNumber] = useState(0);
  // 여기에서 Store 에 접근하여, counter의 값을 읽고싶다
  // useSelector (인자로 콜백함수가 들어감, 그 함수의 인자는 스토어 안에 있는 전체 state)

  const counter = useSelector((state)=> {
    return state.counter;
  })


  // dispatch 가져오기
  const dispatch = useDispatch();

  return (
    <div >
      현재카운트 : {counter.number}
      <div>
        {/* <input type='number' value={number} onChange={(event)=> {
          setNumber(+event.target.value);
        }}/> */}
        <input type='number' value={number} onChange={(event)=> {
          const { value } = event.target;
          setNumber(+value);
        }}/>
      </div>
      <button onClick={()=>{
        // +1 을 해주는 로직을 써주면 된다.
        // dispatch 가져오기
        // dispatch(plusOne());
        dispatch(plusN(number));
      }}>+</button>
      <button onClick={()=>{
        dispatch(minusN(number));
      }}>-</button>
    </div>
  );
}

export default App;
