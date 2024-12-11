import './App.css'
import Student from './components/student/student.component';

const COURSES_LIST = ['React', 'HTML', 'CSS'];

function App() {
  return (
    <div>
      <h1 style={{ color: '#a3ff55' }}>Welcome to GSG React/Next Course</h1>
      <Student name="Ahmad Saeed" age={18} isGraduated={false} coursesList={COURSES_LIST} />
      <Student name="Hiba Jameel" age={20} isGraduated={false} coursesList={COURSES_LIST} />
      <Student name={"Waleed Fadi"} age={23} isGraduated={true} coursesList={COURSES_LIST} />
      <Student name="Sarah Waheed" age={19} isGraduated={!false} coursesList={COURSES_LIST} />
      <Student name="Mohammad Ahmad" age={24 - 2} isGraduated={true} coursesList={COURSES_LIST} />
    </div>
  )
}

export default App;