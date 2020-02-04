export const initialState = {
  //state goes here
};

export const rootReducer = (state, action) => {
  console.log("From my reducer", state, action);
  switch (action.type) {
    default:
      return state;
  }
};
