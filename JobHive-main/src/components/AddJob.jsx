import React, { useState } from 'react';

const AddJob = () => {
  const [postProfile, setPostProfile] = useState(''); // Job Title
  const [postDesc, setPostDesc] = useState(''); // Job Description
  const [reqExperience, setReqExperience] = useState(''); // Required Experience
  const [postTechStack, setPostTechStack] = useState(''); // Technologies (Comma separated)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobPost = {
      postProfile,           // Job Title
      postDesc,              // Job Description
      reqExperience,         // Required Experience
      postTechStack: postTechStack.split(',').map(tech => tech.trim()), // Convert string to array of techs
    };

    try {
      const response = await fetch('http://localhost:8080/jobPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobPost),
      });

      if (response.ok) {
        alert('Job added successfully!');
        // Reset form fields after successful submission
        setPostProfile('');
        setPostDesc('');
        setReqExperience('');
        setPostTechStack('');
      } else {
        alert('Failed to add the job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Job</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postProfile">
            Job Title
          </label>
          <input
            type="text"
            id="postProfile"
            value={postProfile}
            onChange={(e) => setPostProfile(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postDesc">
            Job Description
          </label>
          <textarea
            id="postDesc"
            value={postDesc}
            onChange={(e) => setPostDesc(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="reqExperience">
            Required Experience (in years)
          </label>
          <input
            type="number"
            id="reqExperience"
            value={reqExperience}
            onChange={(e) => setReqExperience(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postTechStack">
            Technologies (Comma separated)
          </label>
          <input
            type="text"
            id="postTechStack"
            value={postTechStack}
            onChange={(e) => setPostTechStack(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
