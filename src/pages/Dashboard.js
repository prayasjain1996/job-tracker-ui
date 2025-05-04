import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome, {user?.name || "User"}!
        </h1>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-500 text-white rounded-lg"
        >
          Logout
        </button>
        <JobForm fetchJobs={() => {}} />
        <JobList />
      </div>
    </div>
  );
};

export default Dashboard;
