// app/subjects/[branch]/[semester]/page.jsx
import React from 'react';

const SubjectsPage = ({ params }) => {
  const { branch, semester } = params;

  // You would typically fetch or have a predefined list of subjects here
  const subjects = [
    'Data Structures',
    'Algorithms',
    'Operating Systems',
    'Database Management Systems',
    // Add more subjects as needed
  ];

  return (
    <div className="min-h-screen bg-[#ECDFCC] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-zinc-950">
          Subjects 
        </h1>
        <ul className="list-disc pl-10 text-zinc-950">
          {subjects.map((subject) => (
            <li key={subject} className="text-lg mb-2">{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubjectsPage;
