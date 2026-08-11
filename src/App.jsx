import { students } from "./data/student";
import StudentDirectory from './components/StudentDirectory';

export default function App() {
  return <StudentDirectory students={students} />;
}