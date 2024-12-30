import { useMemo } from 'react';
import { ITodoItem } from '../types';
import './dashboard.css';

interface IProps {
  items: ITodoItem[];
}

const Dashboard = (props: IProps) => {
  console.log("Re render [Dashboard]");

  const urgentCount = useMemo(() => {
    return props.items.filter(item => item.isUrgent).length;
  }, [props.items]);

  const completedCount = useMemo(() => {
    console.log("calc completedCount");
    return props.items.filter(item => item.isDone).length;
  }, [props.items]);

  return (
    <div className="dashboard-wrapper">
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