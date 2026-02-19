export const layoutReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case "SET_DESKTOP":
      return {
        ...state,
        isDesktop: action.payload,
        sidebarOpen: action.payload ? true : false, // mobile default closed
      };

    default:
      return state;
  }
};
