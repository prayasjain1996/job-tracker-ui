import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/api/jobs", {
        headers: { "x-auth-token": token },
      });
      setJobs(response.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id} className="p-4 bg-white shadow-md rounded-lg mb-4">
          <h3 className="text-xl">{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
