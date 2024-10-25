"use client";

import { useState, useEffect } from "react";

const Resources = () => {
  // State to store selected branch and semester
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [subjects, setSubjects] = useState(null); // State to store subjects

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
    <div className="h-full mt-8 flex flex-col items-center justify-center bg-[#101010]">
      <h1 className="font-bold text-3xl">Select Your Branch</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full m-2 p-2 cursor-pointer">
        {branches.map((branch) => (
          <div
            key={branch}
            className="bg-primary text-black h-12 rounded-md font-bold flex items-center justify-center shadow-md transition-all duration-300 ease-in-out transform hover:bg-accent hover:scale-105 hover:shadow-xl"
            onClick={() => {
              setSelectedBranch(branch);
              setSelectedSemester(null);
            }} // Reset semester on branch selection
          >
            {branch}
          </div>
        ))}
      </div>

      {/* Conditionally render semester section only if a branch is selected */}
      {selectedBranch && (
        <>
          <h1 className="font-bold text-2xl mt-4">
            Select Your Semester for {selectedBranch}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2 w-full m-2 p-2 cursor-pointer">
            {semesters.map((semester) => (
              <div
                key={semester}
                className="h-12 rounded-md font-bold flex items-center justify-center shadow-md
                           transition-all duration-300 ease-in-out transform hover:bg-accent hover:scale-105 hover:shadow-xl bg-primary text-black"
                onClick={() => setSelectedSemester(semester)}
              >
                {semester}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Conditionally render subjects section only if both branch and semester are selected */}
      {selectedBranch && selectedSemester && subjects && (
        <div className="mt-6 w-full">
          <h1 className="mx-10 font-bold text-2xl">
            Subjects for {selectedBranch} - {selectedSemester}
          </h1>
          <ul className="list-disc ml-16 mt-2">
            {subjects[selectedBranch][selectedSemester].map(
              (subject, index) => (
                <li key={index} className="my-2">
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
