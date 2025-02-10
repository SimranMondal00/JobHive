import React, { useState, useEffect } from "react";
import axios from "axios";

const BrowseJobs = ({ onSaveJob }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const staticJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
      description: "Build and optimize user interfaces with React and TailwindCSS.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeWorks",
      location: "San Francisco, CA",
      description: "Develop REST APIs and manage server-side logic using Java and PostgreSQL.",
    },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobPosts");
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Browse Jobs
      </h1>

      {/* Static Jobs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {staticJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-700">{job.title}</h2>
            <p className="text-sm text-gray-500">{job.company}</p>
            <p className="text-sm text-gray-400">{job.location}</p>
            <p className="mt-2 text-gray-600">{job.description}</p>
            <button
              onClick={() => onSaveJob(job)}
              className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            >
              Save Job
            </button>
          </div>
        ))}
      </div>

      {/* Dynamic Jobs */}
      {loading ? (
        <p className="text-center text-gray-600">Loading jobs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
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
                onClick={() => onSaveJob(job)}
                className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
              >
                Save Job
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseJobs;
