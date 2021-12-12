import React from 'react';
import MicIcon from "@mui/icons-material/Mic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "../styles/Babblebot.css";
import icon from "../assets/Babbleboticon.JPG";
import {
  Link
} from "react-router-dom";

function Babblebot() {
    return (
        <>
          <div className="header">
          
        <div className="header_btn">
        <img className='logicon' src={icon} alt="logo"/>
        <div><Link to="/">Microphone <MicIcon/></Link></div>
        <div ><Link to="/sound"> Headphones <VolumeUpIcon/></Link> </div>
        </div>
       
        <div><Link to="/feedback">Feedback</Link></div>
      </div>
            
        </>
    );
}

export default Babblebot;