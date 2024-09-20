import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = '';  // Replace with your actual username
  const password = '';  // Replace with your actual password

  // Fetch the jobs using basic authentication
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8080/jobPosts', {
          headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password), // Basic Auth
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [username, password]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-list bg-yellow-50 text-black p-4">
      <h1 className="text-2xl font-bold">Job List</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.postId} className="job-item my-2 p-2 border border-black">
              <h2 className="text-xl">{job.postProfile}</h2> {/* Use the correct field names */}
              <p>{job.postDesc}</p> {/* Use postDesc for description */}
              <p>Required Experience: {job.reqExperience} years</p> {/* Show the required experience */}
              <p>Technologies: {job.postTechStack.join(', ')}</p> {/* Convert array of tech stack to string */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
