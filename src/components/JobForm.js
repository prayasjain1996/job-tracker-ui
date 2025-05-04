import React, { useState } from "react";
import axios from "axios";

const JobForm = ({ fetchJobs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/jobs",
        { title, description },
        {
          headers: { "x-auth-token": token },
        }
      );
      setTitle("");
      setDescription("");
      fetchJobs();
    } catch (err) {
      console.error("Error creating job:", err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleCreate} className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 mb-2 w-full"
        placeholder="Job title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 mb-2 w-full"
        placeholder="Job description"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
        Create Job
      </button>
    </form>
  );
};

export default JobForm;
