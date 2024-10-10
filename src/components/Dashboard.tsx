import React from "react";
import MainChart from "./charts/MainChart";
import DashboardHeader from "./DashboardHeader";
import AiChat from "./AiChat";
import Notifications from "./Notifications";

const Dashboard = () => {
    return (
        <div className="h-fit grid grid-cols-12 gap-4 px-4">
            <div className="col-span-12">
                <DashboardHeader />
            </div>
            <div className="col-span-8 row-span-4">
                <MainChart />
            </div>
            <div className="col-span-4">
                <Notifications />
            </div>
            <div className="col-span-4 row-span-3">
                <AiChat />
            </div>
        </div>
    );
};

export default Dashboard;
