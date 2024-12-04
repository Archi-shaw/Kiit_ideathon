"use client";
import { useEffect, useState } from "react";

const ChatsPage = () => {
    // Mock fetching the user's semester (replace with actual API call or auth data)
    const [semester, setSemester] = useState(null);

    useEffect(() => {
        // Simulating a user fetching their semester from backend/auth token
        const fetchUserSemester = async () => {
            // Replace this with a real API call or auth context
            const userSemester = await new Promise((resolve) => setTimeout(() => resolve(3), 500)); 
            setSemester(userSemester);
        };

        fetchUserSemester();
    }, []);

    if (semester === null) {
        // Show a loading state until the semester is fetched
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Loading your chat...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-2xl font-semibold">
                    Semester {semester} Chat
                </h1>
            </header>

            {/* Chat Area */}
            <main className="flex-1 flex flex-col p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    {/* Example Messages */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="bg-gray-200 p-3 rounded-lg shadow-sm">
                            <p className="text-sm">Welcome to Semester {semester} chat!</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 flex-row-reverse">
                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                        <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm">Hi! Let’s connect and collaborate.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Input Area */}
            <footer className="p-4 bg-white border-t shadow-sm">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                        Send
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ChatsPage;
