import { useContext, useMemo } from 'react';
import { ITodoItem } from '../types';
import './dashboard.css';
import { ThemeContext } from '../../main';

interface IProps {
  items: ITodoItem[];
}

const Dashboard = (props: IProps) => {
  const { theme } = useContext(ThemeContext)
  const urgentCount = useMemo(() => {
    return props.items.filter(item => item.isUrgent).length;
  }, [props.items]);

  const completedCount = useMemo(() => {
    return props.items.filter(item => item.isDone).length;
  }, [props.items]);

  return (
    <div className={`dashboard-wrapper ${theme}`}>
      <div>
        <b>{props.items.length}</b>
        <span>Created Tasks</span>
      </div>
      <div>
        <b>{urgentCount}</b>
        <span>Urgent Tasks</span>
      </div>
      <div>
        <b>{completedCount}</b>
        <span>Completed Tasks</span>
      </div>
    </div>
  )
}

export default Dashboard