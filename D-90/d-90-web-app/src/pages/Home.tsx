import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assuming the logo is stored in the assets folder

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src={logo} alt="D-90 Logo" className="mb-8" />
            <h1 className="text-4xl font-bold mb-4">Welcome to D-90!</h1>
            <p className="text-lg mb-6">Your journey starts here. Explore the key sections below:</p>
            <div className="flex space-x-4">
                <Link to="/profile" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Profile</Link>
                <Link to="/dashboard" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Dashboard</Link>
                <Link to="/batches" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Batches</Link>
            </div>
        </div>
    );
};

export default Home;