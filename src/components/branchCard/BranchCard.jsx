// components/BranchCard.jsx
import React from 'react';
import Link from 'next/link';

const BranchCard = ({ branchName, icon }) => {
  return (
    <Link href={`/semester/${branchName}`}>
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex items-center flex-col">
        <div className="mb-4">
          <img src={icon} alt={`${branchName} icon`} className="h-16 w-16" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{branchName}</h3>
      </div>
    </div>
    </Link>
  );
};

export default BranchCard;
