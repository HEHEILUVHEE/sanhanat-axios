import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      {/* Course Image */}
      <div className="mb-4">
        <img
          src={props.picture || "default-image-url.jpg"}
          alt="course"
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      {/* Course Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">{props.title}</h2>
      {/* Course Detail */}
      <p className="text-gray-600 mb-4">{props.detail}</p>
      {/* ไปหา detail */}
      <NavLink
        to={"/course/" + props.id}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        เนื้อหาในหลักสูตร
      </NavLink>
    </div>
  );
};

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      const data_format = res.data.data; // Assuming res.data.data is an array of courses
      setData(data_format);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        คอร์สการสอน
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
