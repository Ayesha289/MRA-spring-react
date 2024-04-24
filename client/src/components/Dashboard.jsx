import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-11/12 md:w-3/4 lg:w-4/5 bg-white rounded-lg shadow-xl p-12">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Welcome to Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-100 rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">All Plans</h3>
            <p className="text-sm text-gray-600">Explore all available plans</p>
            <Link to="/plans" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg text-center transition duration-300 ease-in-out">
              View Plans
            </Link>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-pink-800 mb-4">Plans by Category</h3>
            <p className="text-sm text-gray-600">Browse plans by category</p>
            <Link to="/plans-category" className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-lg text-center transition duration-300 ease-in-out">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
