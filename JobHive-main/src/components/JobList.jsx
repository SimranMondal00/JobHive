import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "Ak"; // Replace with your actual username
  const password = "ak@1105"; // Replace with your actual password

  const defaultJobs = [
    {
      postId: 1,
      postProfile: "Software Engineer",
      postDesc: "Develop and maintain web applications.",
      reqExperience: 2,
      postTechStack: ["React", "Node.js", "MongoDB"],
    },
    {
      postId: 2,
      postProfile: "Frontend Developer",
      postDesc: "Build user-friendly interfaces.",
      reqExperience: 1,
      postTechStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      postId: 3,
      postProfile: "Backend Developer",
      postDesc: "Design and manage APIs and databases.",
      reqExperience: 3,
      postTechStack: ["Java", "Spring Boot", "PostgreSQL"],
    },
    {
      postId: 4,
      postProfile: "Data Scientist",
      postDesc: "Analyze data to drive insights.",
      reqExperience: 2,
      postTechStack: ["Python", "Pandas", "TensorFlow"],
    },
    {
      postId: 5,
      postProfile: "DevOps Engineer",
      postDesc: "Implement CI/CD pipelines.",
      reqExperience: 3,
      postTechStack: ["Docker", "Kubernetes", "AWS"],
    },
  ];

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8080/jobPosts", {
          headers: {
            Authorization: "Basic " + btoa(username + ":" + password), // Basic Auth
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setJobs([...defaultJobs, ...data]); // Combine default and fetched jobs
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs(defaultJobs); // Fallback to default jobs if fetch fails
        setLoading(false);
      }
    };

    fetchJobs();
  }, [username, password]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center mt-4 text-blue-700">Loading jobs...</div>;
  }

  return (
    <div className="job-list bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Featured Jobs
      </h1>
      <Slider {...settings}>
        {jobs.map((job) => (
          <div key={job.postId} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {job.postProfile}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{job.postDesc}</p>
              <p className="text-sm text-gray-800 mb-2">
                Experience Required: <strong>{job.reqExperience} years</strong>
              </p>
              <p className="text-sm text-gray-800 mb-4">
                Tech Stack: {job.postTechStack.join(", ")}
              </p>
              <div className="flex justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                  View Details
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobList;
