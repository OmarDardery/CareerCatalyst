import React, { useState, useRef } from "react";
import jobs from "../jobsData";

function JobsDetails() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
      
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
              fontSize: "clamp(0.1rem, 3vw, 20px)",
              borderRight: "1px solid black",
            }}
          >
            {job.name}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "87vw",
          borderRadius: "33px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1050px" 
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: jobs[current].html }} />
      </div>
    </div>
  );
}

export default JobsDetails;
