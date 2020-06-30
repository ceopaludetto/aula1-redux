export const CounterTypes = {
  increment: "@COUNTER/INCREMENT",
  decrement: "@COUNTER/DECREMENT",
};

export const increment = () => ({
  type: CounterTypes.increment,
});

export const decrement = () => ({
  type: CounterTypes.decrement,
});

const initialState = 0;

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case CounterTypes.increment:
      return state + 1;
    case CounterTypes.decrement:
      return state - 1;
    default:
      return state;
  }
};
