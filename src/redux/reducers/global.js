const initialState = {
  loading: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
