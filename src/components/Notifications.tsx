import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Notifications = () => {
    return (
        <Card className="space-y-2">
            <CardHeader className="pt-4 pb-1">
                <div className="flex items-center justify-between">
                    <CardTitle>Notifications</CardTitle>
                    <Button variant="link" className="text-red-500">
                        Clear all
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2 items-center">
                        <p>Today</p>
                        <span className="text-xs text-white bg-primary-foreground rounded-full px-2">
                            4
                        </span>
                    </div>
                    <Button variant="link" className="text-muted-foreground">
                        See all
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default Notifications;
