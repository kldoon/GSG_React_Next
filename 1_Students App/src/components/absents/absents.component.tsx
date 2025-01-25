import { useContext, useEffect, useRef, useState } from 'react'
import { IStudent } from '../../@types';
import { AuthContext } from '../../providers/authProvider';
import { StateContext } from '../../providers/stateProvider';

type IProps = IStudent

const Absents = (props: IProps) => {
  const [absents, setAbsents] = useState(props.absents);
  const [absentColor, setAbsentColor] = useState('#213547');
  const prevAbsents = useRef<number>(props.absents);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(StateContext);


  useEffect(() => {
    if (absents >= 10) {
      setAbsentColor('#ff0000');
    } else if (absents >= 7) {
      setAbsentColor('#fd9c0e');
    } else if (absents >= 5) {
      setAbsentColor('#d6c728');
    } else {
      setAbsentColor('#213547');
    }
  }, [absents]);

  const addAbsent = () => {
    prevAbsents.current = absents;
    setAbsents(absents + 1);
    if (dispatch) {
      dispatch({ type: "UPDATE_ABSENTS", payload: { id: props.id, change: +1 } });
    }
  }

  const removeAbsent = () => {
    if (absents - 1 >= 0) {
      prevAbsents.current = absents;
      setAbsents(absents - 1);
      if (dispatch) {
        dispatch({ type: "UPDATE_ABSENTS", payload: { id: props.id, change: -1 } });
      }
    }
  }

  const resetAbsent = () => {
    prevAbsents.current = absents;
    setAbsents(0);
    if (dispatch) {
      dispatch({ type: "UPDATE_ABSENTS", payload: { id: props.id, change: -absents } });
    }
  }

  return (
    <div className="absents">
      <b style={{ color: absentColor }}>Absents:</b> {absents}
      <button disabled={!user} onClick={addAbsent}>+</button>
      <button disabled={!user} onClick={removeAbsent}>-</button>
      <button disabled={!user} onClick={resetAbsent}>Reset</button>
    </div>
  )
}

export default Absents;