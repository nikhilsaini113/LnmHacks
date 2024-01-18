import logo1 from "./assets/logo1.svg";
import upload from "./assets/upload2.svg";
import "./Component4.css";
import { useState } from "react";
export default function Component4() {
  const [files, setFiles] = useState(null);
  return (
    <div>
      {!files && (
        <div className="center">
          <div className="border">
            <div className="">
              <p className="text-1">Upload Your Resume</p>
              <p className="text-2">and take the next step in your career</p>
              <center>
                <img src={upload} className="img1"></img>
              </center>
              <div className="center">
                <div className="d1">
                  <p className="text-3">Scan Resume</p>
                </div>
              </div>
              <div className="center">
                <p className="text-4">Drag and Drop a .pdf or .docx file</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
