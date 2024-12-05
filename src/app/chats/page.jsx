"use client";
import { useEffect, useState } from "react";

const ChatsPage = () => {
    const [semester, setSemester] = useState(null);

    useEffect(() => {
        const fetchUserSemester = async () => {
            const userSemester = await new Promise((resolve) => setTimeout(() => resolve(4), 500));
            setSemester(userSemester);
        };

        fetchUserSemester();
    }, []);

    if (semester === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <p className="text-primary">Loading your chat...</p>
            </div>
        );
    }

    return (
        // <div className="min-h-[88vh] max-h-screen bg-black text-white flex flex-col">
        <div className="min-h-[88vh] max-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col">

            {/* Header */}
            <header className="bg-primary text-black p-2 shadow-md">
                <h1 className="text-2xl font-semibold text-center">
                    Semester {semester} Chat
                </h1>
            </header>

            {/* Chat Area */}
            <main className="flex-1 flex flex-col p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    {/* Example Messages */}
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                        <div className="bg-green-600 p-3 rounded-lg shadow-sm text-black">
                            <p className="text-sm">Welcome to Semester {semester} chat!</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 flex-row-reverse gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                        <div className="bg-green-700 text-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm">Hi! Let’s connect and collaborate.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Input Area */}
            <footer className="p-4 bg-black border-t border-green-500">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-green-500 rounded-lg bg-black text-white focus:outline-none focus:ring focus:ring-green-300"
                    />
                    <button className="bg-green-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-green-400 transition">
                        Send
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ChatsPage;
