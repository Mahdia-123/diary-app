import React from "react";
import { Link, Outlet } from "react-router-dom";

// Import students data from centralized file
import students from "../data/students";

export default function Students() {
  return (
    <div>
      <h1>Students</h1>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {students.map((student) => (
          <div
            key={student.id}
            className="card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              minWidth: "150px",
            }}
          >
            <h3>{student.name}</h3>

            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>

            <Link to={`/students/${student.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
