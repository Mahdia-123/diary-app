import React from "react";

import { Link, Outlet } from "react-router-dom";

// Import teachers data from centralized file
import teachers from "../data/teachers";

// The main Teachers component
export default function Teachers() {
  return (
    <div>
      {/* Page title */}
      <h1>Teachers</h1>

      {/* List of teacher cards */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {/* Loop through each teacher and show their info in a card */}
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              minWidth: "150px",
            }}
          >
            {/* Teacher name */}
            <h3>{teacher.name}</h3>
            {/* Teacher subject */}
            <p>Subject: {teacher.subject}</p>
            {/* Link to the details page for this teacher */}
            <Link to={`/teachers/${teacher.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      {/* This is where the nested route (TeacherDetails) will show up */}
      <div style={{ marginTop: "2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
