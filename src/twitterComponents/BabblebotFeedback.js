import React from "react";
import Babblebot from "./Babblebot";
import "../styles/Feedback.css";
import Footer from "./Footer";
function BabblebotFeedback() {
  return (
    <div>
      <Babblebot />
      <div className="mainform"> 
       <div className="Form">
        <div>
          <h1>Feedback</h1>
        </div>
        <div>
          We are very friendly and hardworking guys. You can write to us for any
          reason, even request some new feature in this project.
        </div>

        <lable>Message</lable>
        <textarea
        className="textarea"
          placeholder="Write something.."
        ></textarea>

        <lable>Email</lable>
        <input type="text" placeholder="Please Enter your Email" />
        <div>
          <button className="submit">Submit</button>
          <button>Cancel</button>
        </div>
      </div>

      </div>
     
      <Footer />
    </div>
  );
}

export default BabblebotFeedback;
