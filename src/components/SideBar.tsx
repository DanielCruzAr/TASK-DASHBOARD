"use client";

import React from "react";
import { Card } from "./ui/card";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { Button } from "./ui/button";
import { ChevronDownIcon, GridIcon } from "@radix-ui/react-icons";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";
import {
    DashboardIcon,
    CalendarIcon,
    GearIcon,
    PersonIcon,
    LaptopIcon,
    StackIcon,
    CubeIcon,
} from "@radix-ui/react-icons";
import SearchBar from "./SearchBar";
import CollapsibleMenu from "./CollapsibleMenu";

const navItems = [
    {
        title: "Dashboard",
        href: "#",
        icon: DashboardIcon,
    },
    {
        title: "Meetings",
        href: "#",
        icon: LaptopIcon,
    },
    {
        title: "Calendar",
        href: "#",
        icon: CalendarIcon,
    },
    {
        title: "Pluggins",
        href: "#",
        icon: StackIcon,
    },
];

const SideBar = () => {
    const handleSearch = (value: string) => {
        console.log(value);
    };

    return (
        <div className="relative flex flex-col w-1/4 py-10 px-4 border-r-2 border-opacity-30">
            <div className="flex space-x-2 mb-14 items-center text-primary">
                <GridIcon className="h-6 w-6 font-bold" />
                <h1 className="text-xl font-bold">Task Manager Dashboard</h1>
            </div>
            <div className="flex flex-col gap-4 border-b-2 pb-4">
                <SearchBar onSearch={handleSearch} />
                <Card className="flex items-center p-4 space-x-4 w-full">
                    <CubeIcon className="h-6 w-6" />
                    <Collapsible className="flex flex-col w-full">
                        <p className="text-sm">Workspace</p>
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold">Workspace 1</h4>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <ChevronDownIcon className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </Collapsible>
                </Card>
            </div>
            <div className="h-full flex flex-col justify-between px-2 py-4 space-y-4">
                <div className="flex flex-col space-y-2">
                    <h4>Main Menu</h4>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start space-y-2">
                            {navItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="flex items-center"
                                    >
                                        {item.icon && (
                                            <item.icon className="h-4 w-4 mr-2" />
                                        )}
                                        {item.title}
                                        {item.title === "Dashboard" && (
                                            <span className="text-xs text-white bg-primary-foreground rounded-full px-2 ml-10">
                                                4
                                            </span>
                                        )}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <CollapsibleMenu />
                </div>
            </div>
            <div className="flex flex-col px-2 py-4 border-t-2">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col items-start space-y-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href={"#"}
                                className="flex items-center"
                            >
                                <PersonIcon className="h-4 w-4 mr-2" />
                                Profile
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href={"#"}
                                className="flex items-center"
                            >
                                <GearIcon className="h-4 w-4 mr-2" />
                                Settings
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
};

export default SideBar;

/* 
<NavigationMenu>
    <NavigationMenuList className="flex flex-col items-start space-y-2">
        <NavigationMenuItem>
            <NavigationMenuLink
                href={"#"}
                className="flex items-center"
            >
                <PersonIcon className="h-4 w-4 mr-2" />
                Profile
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink
                href={"#"}
                className="flex items-center"
            >
                <GearIcon className="h-4 w-4 mr-2" />
                Settings
            </NavigationMenuLink>
        </NavigationMenuItem>
    </NavigationMenuList>
</NavigationMenu>
*/
