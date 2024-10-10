"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
    ChevronDownIcon,
    MoonIcon,
    SunIcon,
    BellIcon,
    PlusIcon,
    Link2Icon,
    DownloadIcon,
} from "@radix-ui/react-icons";

const Header = () => {
    const { setTheme } = useTheme();

    return (
        <div className="flex w-full justify-between items-center py-10 px-4 border-b-2 border-opacity-30">
            <div className="flex gap-4">
                <Avatar>
                    <AvatarImage src="img/artist5.jpg" alt="User img" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Collapsible className="w-[200px] space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4">
                        <div className="flex flex-col">
                            <p className="text-sm text-muted-foreground text-opacity-35">
                                @daniel.cruz
                            </p>
                            <h4 className="text-sm font-semibold">Daniel Cruz</h4>
                        </div>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <ChevronDownIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="absolute space-y-2">
                        <Button
                            variant="ghost"
                            className="font-mono text-sm shadow-sm"
                        >
                            Log out
                        </Button>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="flex space-x-6 items-center">
                <div className="flex -space-x-4">
                    <Avatar className="border-2">
                        <AvatarImage
                            src="img/user2.jpg"
                            alt="Team member 1"
                        />
                        <AvatarFallback>TM1</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2">
                        <AvatarImage
                            src="img/user3.jpg"
                            alt="Team member 2"
                        />
                        <AvatarFallback>TM2</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2">
                        <AvatarImage
                            src="img/user4.jpg"
                            alt="Team member 3"
                        />
                        <AvatarFallback>TM3</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2">
                        <AvatarImage
                            src="img/user5.jpg"
                            alt="Team member 4"
                        />
                        <AvatarFallback>TM4</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex border-2 border-dashed p-1 rounded-full">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-7 h-7 bg-primary text-black hover:text-white"
                    >
                        <PlusIcon className="h-4 w-4" />
                    </Button>
                </div>
                <Button>
                    <Link2Icon className="h-4 w-4 mr-2" />
                    Share Link
                </Button>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                    <BellIcon className="h-4 w-4" />
                </Button>
                <Button>
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download Report
                </Button>
                <div className="flex bg-secondary items-center rounded-full p-[2px]">
                    <Button
                        variant="ghost"
                        className="rounded-full bg-background"
                        onClick={() => setTheme("dark")}
                    >
                        <MoonIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        className="rounded-full bg-secondary stroke-none"
                        onClick={() => setTheme("light")}
                    >
                        <SunIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
