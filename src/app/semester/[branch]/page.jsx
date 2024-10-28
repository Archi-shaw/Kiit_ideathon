// app/semester/[branch]/page.jsx
import React from 'react';
import Link from 'next/link';

const semesters = [
  'Semester 1',
  'Semester 2',
  'Semester 3',
  'Semester 4',
  'Semester 5',
  'Semester 6',
  'Semester 7',
  'Semester 8',
];

const SemesterPage = ({ params }) => {
  const { branch } = params; // Get the branch name from URL parameters

  return (
    <div className="min-h-screen bg-[#ECDFCC] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-zinc-950">Select Your Semester for {branch}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {semesters.map((semester) => (
            <Link key={semester} href={`/subjects/${branch}/${semester}`}>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-800">{semester}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SemesterPage;
