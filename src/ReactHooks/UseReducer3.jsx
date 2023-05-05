import React, { useEffect, useReducer, useState } from 'react';

const initialStudentList = [
  {
    id: 1,
    name: 'lakshmi',
    branch: 'Computer Science',
    contact: '1234567890',
  },
  {
    id: 2,
    name: 'bhaskar',
    branch: 'Electrical Engineering',
    contact: '9876543210',
  },
  {
    id: 3,
    name: 'chakri',
    branch: 'Mechanical Engineering',
    contact: '5678901234',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return state.filter((student) => student.id !== action.id);
    default:
      return state;
  }
};

export default function StudentList() {
  const [studentList, dispatch] = useReducer(reducer, initialStudentList);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log('Student List', studentList);
  }, [studentList]);

  const handleDelete = (student) => {
    dispatch({ type: 'DELETE', id: student.id });
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredStudentList = studentList.filter((student) => {
    return student.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <h1>Student List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={handleSearch}
      />
      {filteredStudentList &&
        filteredStudentList.map((student) => (
          <div key={student.id}>
            <p>
              {student.name} ({student.branch})
            </p>
            <p>Contact: {student.contact}</p>
            <button onClick={() => handleDelete(student)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
