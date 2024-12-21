"use client"
import { useState } from "react";

interface Lectures {
    id:number,
    Title :string,
    Description : string,
}
const lectures : Lectures[]=[
    {id:1,Title: "Understanding Next.js", Description: "Learn the fundamentals of Next.js and why it's a great framework for modern web development."},
    {id:2 ,Title: "How to Use Tailwind CSS", Description: "A complete guide to using Tailwind CSS for efficient and responsive web design." },
   {id:3,Title: "Deploying a Next.js App",Description: "Step-by-step instructions on deploying your Next.js application with ease."},
   {id:4,Title: "Exploring React Hooks",Description: "A comprehensive guide to understanding and using React Hooks for functional components."},
   {id:5,Title: "Building a Full-Stack App with Next.js", Description: "Learn how to create a full-stack application using Next.js, integrating both front-end and back-end."},
   {id:6,Title: "CSS Grid vs Flexbox: What's the Difference?", Description: "Understand the key differences between CSS Grid and Flexbox for creating responsive layouts."},
   { id: 7, Title: "Server Actions", Description: "Learn about Server Actions, a new feature in Next.js 15 to handle server-side logic directly in your components." },
  { id: 8, Title: "Middleware in Next.js 15", Description: "Learn how to use middleware to handle requests and responses globally in Next.js 15." },
  { id: 9, Title: "Deploying Next.js 15 Apps", Description: "A guide to deploying your Next.js 15 application to platforms like Vercel or other hosting services." },
  { id: 10, Title: "Next.js 15 Best Practices", Description: "Tips and tricks to make the most out of your Next.js 15 projects." },
];

export default function BlogCard() {
  const [selectedLecture, setSelectedLecture] = useState<Lectures | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen">
      <div
        className={`fixed z-40 top-0 left-0 w-64 bg-gray-800 text-white h-full p-4 pt-12 overflow-y-auto transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}>
        <h2 className="text-xl font-bold mb-4 mt-[10%]">Lectures</h2>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id} className="mb-4">
              <h3 className="font-semibold">{lecture.Title}</h3>
              <button
                onClick={() => setSelectedLecture(lecture)}
                className="mt-2 text-sm bg-[#3b5c30] hover:bg-[#769b69] px-3 py-1 rounded">
                Read More
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-[2%] left-[65%] z-50 bg-gray-800 text-white p-2 rounded shadow-md md:hidden">
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      <div className="flex-1 p-6 md:ml-[20%]">
        {selectedLecture ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#85e459]">{selectedLecture.Title}</h2>
            <p>{selectedLecture.Description}</p>
          </div>
        ) : (
          <div className="text-gray-500 text-center">
            <p className="text-xl">Select a lecture to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}


