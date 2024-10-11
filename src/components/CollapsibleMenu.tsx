"use client";

import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { ChevronDownIcon, FramerLogoIcon, GitHubLogoIcon, ModulzLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";

const CollapsibleMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            className="w-full space-y-2"
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <div className="flex justify-between px-2 bg-primary rounded-full text-black">
                <div className="flex items-center justify-between space-x-4">
                    <CubeTransparentIcon className="h-6 w-6" />
                    <h4 className="text-sm font-semibold">
                        Integrations (4)
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                            {isOpen ? (
                                <ChevronDownIcon className="h-4 w-4 rotate-180" />
                            ) : (
                                <ChevronDownIcon className="h-4 w-4" />
                            )}
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
            <CollapsibleContent className="ml-10">
                <div className="flex items-center space-x-2">
                    <GitHubLogoIcon className="h-4 w-4" />
                    <p className="text-muted-foreground">Github</p>
                </div>
                <div className="flex items-center space-x-2">
                    <ModulzLogoIcon className="h-4 w-4" />
                    <p className="text-muted-foreground">Modulz</p>
                </div>
                <div className="flex items-center space-x-2">
                    <FramerLogoIcon className="h-4 w-4" />
                    <p className="text-muted-foreground">Framer</p>
                </div>
                <div className="flex items-center space-x-2">
                    <NotionLogoIcon className="h-4 w-4" />
                    <p className="text-muted-foreground">Notion</p>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CollapsibleMenu;
