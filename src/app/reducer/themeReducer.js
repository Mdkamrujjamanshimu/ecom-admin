export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "SET_THEME":
      return {
        theme: action.payload,
      };

    default:
      return state;
  }
};