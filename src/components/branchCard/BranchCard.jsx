import React from 'react';
import Link from 'next/link';

const BranchCard = ({ branchName, icon }) => {
  return (
    <Link href={`/semester/${branchName}`}>
      <div className="transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-2xl border rounded-lg overflow-hidden cursor-pointer p-4 text-center">
        <div className="mb-3">
          <img src={icon} alt={`${branchName} icon`} className="h-20 w-20 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-green-400">{branchName}</h3>
      </div>
    </Link>
  );
};

export default BranchCard;
