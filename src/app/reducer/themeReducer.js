// Theme reducer: শুধু dark/light state handle করে
export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    case "SET_THEME":
      return { darkMode: action.payload };
    default:
      return state;
  }
};
