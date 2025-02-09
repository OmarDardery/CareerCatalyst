import React, { useState, useRef } from "react";
import jobs from "../jobsData";

function JobsDetails() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
      
      {/* Horizontal Scroll Menu */}
      <div
        ref={scrollRef}
        className="scrollmenu"
        style={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "0px",
          width: "100vw",
          scrollbarWidth: "1px",
        }}
      >

        {jobs.map((job, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              padding: "15px",
              backgroundColor: current === index ? "#8A6492" : "",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "3vw",
              borderRight: "1px solid black",
            }}
          >
            {job.name}
          </div>
        ))}
      </div>

      {/* Job Details Section */}
      <div
        style={{
          width: "87vw",
          borderRadius: "33px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          backgroundColor: "#8A6492",
          marginTop: "10px",
        }}
      >
        <h2>{jobs[current].name}</h2>
        <p>{jobs[current].description}</p> {/* Assuming each job has a description */}
      </div>
    </div>
  );
}

export default JobsDetails;
