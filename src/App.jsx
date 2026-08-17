import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  function handleAddStudent(newStudent) {
    const studentWithId = {
      ...newStudent,
      id: Date.now()
    };

    setStudents([...students, studentWithId]);
  }

  let visibleStudents = students;

  if (searchTerm.trim() !== '') {
    visibleStudents = visibleStudents.filter((student) =>
      student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }

  if (statusFilter === 'deansLister') {
    visibleStudents = visibleStudents.filter(
      (student) => student.gwa <= 1.75
    );
  }

  if (statusFilter === 'probation') {
    visibleStudents = visibleStudents.filter(
      (student) => student.status === 'On Probation'
    );
  }

  return (
    <div>
      <h1>Student Directory</h1>

      <StudentForm onAdd={handleAddStudent} />

      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      <StudentDirectory students={visibleStudents} />
    </div>
  );
}