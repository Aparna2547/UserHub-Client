import React from "react";
import { Link } from "react-router-dom";
import UsersList from "../User/UsersList";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl w-full h-64">
          <div className="flex justify-center items-center mt-16">
            <h1 className="font-bold text-center" style={{ fontSize: "30px" }}>
              Welcome to UserHub
            </h1>
          </div>
          <div className="flex justify-end mt-14">
            <Link to={"/userlist"}>
              <h1>Go to users</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
