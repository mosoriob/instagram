import React, { useEffect } from "react";
import Header from "../components/header";
export default function NotFound(){
    useEffect(() => {
        document.title = "404 - Not Found";
    }, []);
    
    return (

        <div className="bg-gray-200">
            <Header />
            <div className="mx-auto max-w-screen-lg border-2">
                <h1 className="text-center text-2xl font-bold">404 - Not Found</h1>
            </div>
        </div>
    )
}