"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { lineData } from "./chartData";
import { chartConfig } from "./chartConfig";

const MainChart = () => {
    const totalRequests = lineData.reduce((acc, { value }) => acc + value, 0);
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Requests Statistics</CardTitle>
                <div className="flex items-center">
                    <h3 className="mr-2 text-foreground">{totalRequests}</h3>
                    <p>total</p>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={lineData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis  
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            domain={["dataMin", "auto"]}
                            tickFormatter={(value) => value / 1000 + "k"}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="value"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default MainChart;
