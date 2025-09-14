import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-xl">Manage Events</h2>
                {/* Event management components will go here */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Notices</h2>
                {/* Notices management components will go here */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Other Administrative Tasks</h2>
                {/* Other admin components will go here */}
            </div>
        </div>
    );
};

export default Dashboard;