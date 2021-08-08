export const saveLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SAVE_LATER":
      return {
        ...state,
        saveLater: state.saveLater.some((ele) => ele.id === payload.id)
          ? state.saveLater.filter((ele) => ele.id !== payload.id)
          : [...state.saveLater, payload],
      };

    default:
      return state;
  }
};
