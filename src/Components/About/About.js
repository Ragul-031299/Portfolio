import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./About.css";
const About = () => {
  return (
    <div className="Section_About bg-clr " id="about">
      <div className="container  my-5 d-flex">
        <div className="row  d-flex about_box">
          <div className="col-11 ms-md-0 ms-4 d-flex card bg-clr border border-0  col-lg-6  image_left_outer">
            <div className="image_left vh-100"></div>
          </div>
          <div className="col-11 ms-md-0 ms-4 d-flex border-0 border bg-clr col-lg-6 content_right_outer">
            <div className="content_right  ">
              <div className="content_content">
                <div className="content_title  text-danger mt-md-0 mt-5 pt-4 mt-md-0 text-center">
                  ABOUT ME
                </div>
                <div>
                  Hi, my name is Ragul. I am a Frontend Web Developer and I am
                  very passionate about developing and technology.
                </div>
                <div>
                  To obtain a challenging career in the IT industry and put all
                  my efforts into the growth of the organization and have a
                  great working environment.
                  <div className="content_button ">
                  <a
                    className="text-decoration-none"
                    href="Ragul_G.pdf"
                    download="Ragul_G.pdf"
                  >
                    <button className="btn btn-sm btn-outline my-4 me-0 ms-auto d-flex mb-4">
                      {" "}
                      <FileDownloadIcon className=" fs-2 my-1" />
                      <b>
                        Download<br></br>Resume
                      </b>
                    </button>
                  </a>
                </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
