"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Data Structure",
        description: "Organizing data efficiently.",
        time: "15m ago",
        icon: "📊",
        color: "#4A90E2", // Blue
    },
    {
        name: "Algorithms",
        description: "Step-by-step problem-solving methods.",
        time: "15m ago",
        icon: "⚙️",
        color: "#F39C12", // Orange
    },
    {
        name: "Docker",
        description: "Containerization platform for apps.",
        time: "15m ago",
        icon: "🐳",
        color: "#28B463", // Green
    },
    {
        name: "DevOps",
        description: "Combining development and operations.",
        time: "15m ago",
        icon: "🔧",
        color: "#E74C3C", // Red
    },
    {
        name: "Linux Administration",
        description: "Managing Linux server environments.",
        time: "15m ago",
        icon: "🐧",
        color: "#8E44AD", // Purple
    },
    {
        name: "NextJS",
        description: "React framework for server-side rendering.",
        time: "10m ago",
        icon: "⚛️",
        color: "#FFB800", // Yellow
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework.",
        time: "5m ago",
        icon: "🎨",
        color: "#FF3D71", // Pink
    },
    {
        name: "Python",
        description: "Versatile programming language.",
        time: "2m ago",
        icon: "🐍",
        color: "#1E86FF", // Light Blue
    },
];



notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-2xl">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListBox({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden border-none",
                className,
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
