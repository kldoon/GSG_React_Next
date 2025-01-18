import React, { createContext, useEffect, useReducer } from 'react'
import { stateReducer, State, Action } from '../state/reducer';
import useLocalStorage from '../hooks/local-storage.hook';
import { IStudent } from '../types';

interface IProps {
  children: React.ReactNode;
}

interface IStateContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const INTI_STATE = { state: { totalAbsents: 0, studentsList: [] }, dispatch: () => { } };

export const StateContext = createContext<IStateContext>(INTI_STATE);

const StateProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(stateReducer, { studentsList: [], totalAbsents: 0 });
  const { storedData } = useLocalStorage(state.studentsList, 'students-list');

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    dispatch({ type: "INIT", payload: stdList });
  }, [storedData]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>{props.children}</StateContext.Provider>
  )
}

export default StateProvider