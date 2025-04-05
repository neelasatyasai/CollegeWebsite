import React from "react";
import SlideshowBackground from "./components/SlideshowBackground";
import "bootstrap/dist/css/bootstrap.min.css";



const CollegeWebsite = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* Embedded CSS */}
      <style>{`
        .nav-link {
          transition: color 0.3s, border-bottom 0.3s;
          font-size: 1rem;
          text-transform: uppercase;
        }
        .nav-link:hover {
          color: #0d6efd; /* Bootstrap primary */
          border-bottom: 2px solid #0d6efd;
        }
        .nav-item {
          padding: 0 5px;
        .content-area {
          flex: 1;
          overflow: hidden;
        }
      `}</style>  
      {/* Header */}
      <header className="bg-primary text-white text-center py-4 w-100">
        <h1 className="h3 fw-bold">Maharaja College</h1>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-3 w-100">
        <div className="container">
          <ul className="nav justify-content-center fw-semibold text-primary gap-4">
            <li className="nav-item"><a href="#" className="nav-link px-5">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-5">About Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-5">Academics</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-5">Admissions</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-5">Examinations</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-4">Contact</a></li>
          </ul>
        </div>
      </nav>
      <SlideshowBackground />
      {/* You can add more sections below like About, Courses, Contact, etc. */}
      
{/* Footer */}
<footer className="bg-primary text-white py-3 text-center w-100">
        <p className="mb-0">&copy; 2025 Maharaja College. All rights reserved.</p>
      </footer>
    </div>
    
    
  );
};

export default CollegeWebsite;
