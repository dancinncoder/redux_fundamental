// action value
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";
export const PLUS_N = "counter/PLUS_N";
export const MINUS_N = "counter/MINUS_N";

// action creator : action value를 Return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
  //action 객체를 리턴
}

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}

export const plusN = (payload) => {
  console.log('payload', payload);
  return {
    type: PLUS_N,
    payload: payload,
  }
}

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: payload,
  }
}

// 초기 상태값 (state)
const initialState = {
  number: 0,
};

// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다.
// Ex: payload가 3이다. 3만큼 action type 을 해라라는 뜻이다.



// 리듀서 작성하기 (state에 변화를 일으키는 함수)
// (1) state를 action의 type 에 따라 변경하는 함수

// input에는 state, action을 받음
// action에는 type, value가 포함되어 있다
const counter = (state= initialState, action) => {
  console.log('state in module counter',state);
  switch (action.type){
    case PLUS_ONE:
      return {
        number: state.number + 1,
      }
    case MINUS_ONE:
      return {
        number: state.number -1,
      }
    case PLUS_N:
      return {
        number: state.number + action.payload,
      }
    case MINUS_N:
      return {
        number: state.number - action.payload,
      }
    default:
      return state;
  }
}

export default counter;