import { createContext, useContext, useReducer } from "react";
import { saveLaterReducer } from "./SavedLaterReducer";

const saveLaterContext = createContext();

const intialState = {
  saveLater: [],
};

const SaveLaterFun = ({ children }) => {
  const [state, dispatch] = useReducer(saveLaterReducer, intialState);

  return (
    <saveLaterContext.Provider value={{ state, saveDispatch: dispatch }}>
      {children}
    </saveLaterContext.Provider>
  );
};

export default SaveLaterFun;

export const useSaveLaterContext = () => useContext(saveLaterContext);
