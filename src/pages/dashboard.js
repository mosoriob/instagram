import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import SideBar from "../components/sidebar";
export default function Dashboard(){
    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    // Challange:

    // Render the header, sidebar, and timeline components.
    // Tailwind margin auto
    // 

    return (
        <div className="bg-gray-100">

            <Header />
            <div class="grid grid-cols-4 gap-4 justify-between mx-auto max-w-screen-lg bg-gray-100">
                <Timeline />
                <SideBar />
            </div>
        </div>
    )
}