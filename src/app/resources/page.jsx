
import React from 'react';
import BranchCard from '../../components/branchCard/BranchCard';



const branches = [
  { name: 'CSE', icon: "images/cse.jpg"},
  { name: 'IT', icon: '/icons/it-icon.png' },
  { name: 'ECE', icon: '/icons/ece-icon.png' },
  { name: 'ME', icon: '/icons/me-icon.png' },
  { name: 'EE', icon: '/icons/ee-icon.png' }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-[#ECDFCC] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-zinc-950">Select Your Branch</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <BranchCard key={branch.name} branchName={branch.name} icon={branch.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
