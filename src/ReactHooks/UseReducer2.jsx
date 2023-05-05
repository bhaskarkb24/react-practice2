import React, { useReducer } from 'react';

const studentData = [
  {
    id: 1,
    name: 'Ram',
    branch: 'CSE',
    contact: 9533713553,
  },
  {
    id: 2,
    name: 'Ravi',
    branch: 'ECE',
    contact: 9848022338,
  },
  {
    id: 3,
    name: 'Surya',
    branch: 'CIVIL',
    contact: 8499967890,
  },
  {
    id: 4,
    name: 'Kiran',
    branch: 'EEE',
    contact: 9848032919,
  },
];
const reducer = (students, action) => {
  switch (action.type) {
    case 'SEARCH':
      return students.map((student) => {
        if (student.id === action.id) {
          return { ...student, completed: student.completed };
        } else {
          return student;
        }
      });
    case 'DELETE':
      return students.filter((student) => student.id !== action.id);
    default:
      return students;
  }
};

export default function UseReducer2() {
  const [students, dispatch] = useReducer(reducer, studentData);

  const handleSearch = (searchedStudent) => {
    dispatch({ type: 'SEARCH', searchedStudent: searchedStudent });
  };
  const handleDelete = (studentId) => {
    dispatch({ type: 'DELETE', id: studentId });
  };
  return (
    <>
      <label>
        <input type="search" onChange={() => handleSearch(students)} />
      </label>
      <div>
        {students &&
          students.map((student) => (
            <button onClick={() => handleDelete(student)}>Delete</button>
          ))}
      </div>
    </>
  );
}
