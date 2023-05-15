import React from "react";
import "./Education.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Education = () => {
  return (
    <div className="Section_Education bg-clr" id="education">
      <div className="Section_EducationHeading container">
        <p className="text-danger fs-2 edu py-3 fw-bold text-center">Education</p>
      </div>
      <div className="Section_EducationContent container-fluid justify-content-center px-md-4  bg-clr pb-4 text-center  row ">
        <div className="Section_EducationContent_Left border  card bg-clr mx-md-4 ms-3 col-md-5 mt-md-0  col-11  py-5  border-success  ">
          <p className="text-light">
            <CalendarTodayIcon /> June 2018 - September 2021
          </p>
          <p id="bca">
            BCA <h6 className="text-info fs-4">Bachelour of Computer Application</h6>
          </p>
          <p className="text-muted fw-bold fs-5">Srimad Andavan Arts and Sceince College</p>
          <p className="text-muted fw-bold fs-6">Bharathidhasan University</p>
        </div>
        <div className="Section_EducationContent_Right col-md-5 col-11 mx-md-4 ms-3  mt-md-0 mt-4  py-5 card bg-clr  border border-success ">
          <p className="text-light">
            <CalendarTodayIcon /> August 2023 - present
          </p>
          <p id="bca">
          Frontend Developer
         <h6 className="text-info fs-4">Web Developer Trainee</h6>
          </p>

          <p className="text-muted fw-bold fs-5">Gowebez Technolgies</p>
          <p className="text-muted fw-bold fs-6">Chennai, Guindy</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
