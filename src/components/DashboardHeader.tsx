import React from "react";
import { Button } from "./ui/button";
import { PlusIcon, Link2Icon } from "@radix-ui/react-icons";

const DashboardHeader = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center space-x-4">
                <h2>Welcome back Daniel, How can I help yout today?</h2>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <svg
                        data-slot="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        ></path>
                    </svg>
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
