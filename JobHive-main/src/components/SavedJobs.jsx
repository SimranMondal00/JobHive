import React from "react";

const SavedJobs = ({ savedJobs, onUnsaveJob }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Saved Jobs
      </h1>
      {savedJobs.length === 0 ? (
        <p className="text-center text-gray-600">No saved jobs yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="mt-2 text-gray-600">{job.description}</p>
              <button
                onClick={() => onUnsaveJob(job.id)}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Unsave Job
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
