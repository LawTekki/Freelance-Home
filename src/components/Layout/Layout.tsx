import React, { useState, useEffect } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* One single header at the top */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main area: Sidebar on the left and main content on the right */}
      <div className="flex flex-1 w-full relative">
        {/* Overlay */}
        {isSidebarOpen && window.innerWidth < 768 && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <aside 
          className={`fixed md:relative ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out 
          w-[200px] sm:w-[220px] md:w-[240px] min-h-[calc(100vh-64px)] 
          bg-white z-30 border-r border-[#E6E6E6] shadow-lg md:shadow-none`}
        >
          <Sidebar />
        </aside>
        <main className={`flex-1 p-2 sm:p-3 md:p-4 bg-[#FAFAFA] overflow-auto 
          ${isSidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
