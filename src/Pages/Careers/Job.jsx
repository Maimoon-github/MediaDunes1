//jobOpenings.jsx

import React from 'react';
import './Career.css';


const JobOpenings = () => {
    const jobData = [ 
                       // Job list 1 
      {
        title: 'Team Lead UI UX / Product Design Manager',
        description: 'Denovers LLC, a San Francisco-based Product Design Studio is looking for a Team Lead UI UX / Product Design Manager for its Karachi office (in-house)...',
        tags: ['FullTime', 'Design', 'Management'],
        applyLink: '#'
      },
                       // Job list 2
      {
        title: 'Team Lead UI UX / Product Design Manager',
        // company: 'Denovers LLC',
        // location: 'San Francisco',
        description: 'Denovers LLC, a San Francisco-based Product Design Studio is looking for a Team Lead UI UX / Product Design Manager for its Karachi office (in-house)...',
        tags: ['FullTime', 'Design', 'Management'],
        applyLink: '#'
      },
                          // Job list 3
     
                          // Job list 4
      
                        // Job list 6
  
      // You can add more job listings as needed
    ];
  
    return (
        <>
        


      <div className="job-openings-container">
        <h1 className='job-heading'>Current Job Openings</h1>
        <nav className="job-nav">
          <button>ALL</button>
          <button>TODAY'S TOP</button>
          <button>RECENT</button>
          <button>ENTRY LEVEL JOBS</button>
          <button>LEAD JOBS</button>
          <button>OTHER JOBS</button>
        </nav>
  
        <div className="job-list">
          {jobData.map((job, index) => (
            <div
            className={`job-card ${index % 2 === 0 ? 'white-background' : ''}`}
            key={index}
          >
              <h2>{job.title}</h2>
              {/* <p>{job.company}, {job.location}</p> */}
              <p className="jobs-description">{job.description}</p>
              <div className="job-tags">
                {job.tags.map((tag, tagIndex) => (
                  <span className="job-tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
          <button className="Explore-button">Explore More</button>
        </div>
      </div>


          
      

    </>
    );
  };
  
  export default JobOpenings;