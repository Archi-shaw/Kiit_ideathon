"use client";

import { useState, useEffect } from "react";

const Resources = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    fetch("/data/subjects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setSubjects(data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, []);

  const branches = ["CSE", "IT", "ECE", "EE", "MECH", "CIVIL"];
  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  return (
    <div className="h-full mt-8 flex flex-col items-center justify-center bg-[#101010] p-4">
      <h1 className="font-bold text-xl lg:text-2xl text-center mb-4">
        Select Your Branch
      </h1>

      {/* Branch Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg">
        {branches.map((branch) => (
          <div
            key={branch}
            className="text-white border border-primary rounded-lg p-4 h-32 font-bold flex flex-col items-center justify-center shadow-md transition-all duration-300 ease-in-out transform hover:bg-accent hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => {
              setSelectedBranch(branch);
              setSelectedSemester(null);
            }}
          >
            <img
              src={`/images/${branch.toLowerCase()}.jpg`}
              alt={`${branch} logo`}
              className="w-fit h-full mb-2 object-fit"
            />
            <span>{branch}</span>
          </div>
        ))}
      </div>

      {/* Semester Selection */}
      {selectedBranch && (
        <div className="mt-8 w-full max-w-md text-center">
          <h1 className="font-bold text-xl lg:text-2xl mb-4">
            Select Your Semester for {selectedBranch}
          </h1>
          <div className="grid grid-cols-2 gap-3">
            {semesters.map((semester) => (
              <div
                key={semester}
                className="h-12 text-md rounded-md font-bold flex items-center justify-center shadow-md transition-all duration-300 ease-in-out transform hover:bg-accent hover:scale-105 hover:shadow-xl text-white border border-primary cursor-pointer"
                onClick={() => setSelectedSemester(semester)}
              >
                {semester}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subjects Section */}
      {selectedBranch && selectedSemester && subjects && (
        <div className="mt-6 w-full h-full max-w-md text-center">
          <h1 className="font-bold text-xl mb-4">
            Subjects for {selectedBranch} - {selectedSemester}
          </h1>
          <ul className="list-disc ml-4 text-left">
            {subjects[selectedBranch][selectedSemester].map(
              (subject, index) => (
                <li key={index} className="my-1 text-md">
                  {subject}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resources;
