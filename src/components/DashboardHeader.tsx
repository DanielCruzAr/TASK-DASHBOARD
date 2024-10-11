import React from "react";
import { Button } from "./ui/button";
import { PlusIcon, Link2Icon } from "@radix-ui/react-icons";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

const DashboardHeader = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center space-x-4">
                <h2>Welcome back Daniel, How can I help yout today?</h2>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <MicrophoneIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <PlusIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <Link2Icon className="h-4 w-4" />
                </Button>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="outline" size="lg" className="rounded-full">
                    Export CSV
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                    History Requests
                </Button>
            </div>
        </div>
    );
};

export default DashboardHeader;
