// Projects Component
// const Projects = () => (
//   <div className="container py-5">
//     <h2 className="text-center mb-5">My Projects</h2>
//     <div className="row g-4">
//       {[1, 2, 3].map((project) => (
//         <div key={project} className="col-md-4">
//           <div className="card h-100">
//             <img 
//               src={`/api/placeholder/400/300`}
//               className="card-img-top" 
//               alt={`Project ${project}`}
//             />
//             <div className="card-body">
//               <h5 className="card-title">Project {project}</h5>
//               <p className="card-text">
//                 A brief description of project {project} and its key features.
//                 Technologies used include MongoDB, Express, React, Node.js, and more.
//               </p>
//               <div className="mt-auto">
//                 <a href="#" className="btn btn-primary me-2">
//                   <i className="bi bi-github me-2"></i>GitHub
//                 </a>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
export const Projects = () => (
    <div className="container py-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row g-4">
        {/* Manually added project cards */}
        <div className="col-md-4">
          <div className="card h-100">
            <img 
              src="arthub-snap.png" // Add your image path
              className="card-img-top" 
              alt="Project 1"
            />
            <div className="card-body">
              <h5 className="card-title">ARTHUB - Marketplace for Art works</h5>
              <p className="card-text overflow-auto" style={{height:"150px"}}>
              I Arthub is an innovative online marketplace designed to connect artists with buyers, providing a
seamless platform forshowcasing and purchasing diverse artworks. Arthub ensures a secure, user-friendly
experience across all devices
              </p>
              <div className="mt-auto">
                <a href="https://github.com/naveenreddy1103/Arthub" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-2"></i>GitHub
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100">
            <img 
              src="todo-snap.png" // Add your image path
              className="card-img-top" 
              alt="Project 2"
            />
            <div className="card-body">
              <h5 className="card-title">- Todo Application with Login</h5>
              <p className="card-text overflow-auto" style={{height:"200px"}}>
              I designed and developed a modern Todo application using the MERN stack with Vite for frontend build
tools. The application features user authentication with signup and login functionalities, ensuring secure
access and data privacy. Users can create, update, and manage tasks dynamically, with real-time updates
facilitated by MongoDB's robust database management.
              </p>
              <div className="mt-auto">
                <a href="https://github.com/naveenreddy1103/Mern-TODO" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-2"></i>GitHub
                </a>
                
              </div>
            </div>
          </div>
        </div>
  
        {/* Add more project cards as needed */}
      </div>
    </div>
  );