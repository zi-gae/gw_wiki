// 1. action 생성

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// 2. action creator 생성

export const startTimer = () => {
  return {
    type: START_TIMER
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

export const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// 3. init reducer 생성
const TIMER_DURATION = 1500;

const initalState = {
  isPlaying: false,
  elapsedTime: 0,
  timeDuration: TIMER_DURATION
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);

    default:
      return {
        ...state
      };
  }
};

// 4. reducer function 생성
const applyStartTimer = state => {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
};
const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
};
const applyAddSecond = state => {
  const { elapsedTime, timeDuration } = state;
  if (elapsedTime < timeDuration) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      elapsedTime: 0,
      isPlaying: false
    };
  }
};
// 5. export action creaotr

// 6. export reducer

export default reducer;
