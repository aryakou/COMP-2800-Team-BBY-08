import React from "react";
import "./About.css";
import logo from './MML.png';
import gsand from'./gsand.png';
import mander from './gmander.png';
import arash from './arash.png';
import arya from './arya.png';

export default function About() {
    return (

<div className="wrapper">
  <h1>Our Team</h1>
  <div className="team">
  <div className="team_member">
      <div className="team_img">
        <img src={logo} alt="Team_image"/>
      </div>
      <h3>Our Story</h3>
      <p>Meta MoLog is an app created for those struggling with staying organized during this unprecedented time. With Meta MoLog, users can have confidence that their notes and attachments are 100% secured on the cloud and our privacy standard is an all time high. Users can securely sign up, log in, and create notes to stay up to date with all of their tasks.</p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src={arash} id="myImg" alt="Team_image"/>
      </div>
      <h3>Arash</h3>
      <p className="role">Front-End Developer</p>
      <p>I recently completed my first term at BCIT in the Computer Systems Technology program. My hobbies include working on motorcycles and computers , I look forward to the MML project!</p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src={arya} id="myImg" alt="Team_image"/>
      </div>
      <h3>Arya</h3>
      <p className="role">Cloud Developer</p>
      <p>Coming from a software background, MML is one of the first group projects that I am involved in. I am ecstatic to show you all what we have in store and what the future holds.</p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src={gsand} id="myImg" alt="Team_image"/>
      </div>
      <h3>Gurjot Sandher</h3>
      <p className="role">Cloud Developer</p>
      <p>Sophisticated, suave, tall, 6'0.5", 5% body fat, and cultured. Enjoys chai tea and hot showers. A hot wings enthusiast (of the buffalo variety). Programs occasionally and enjoys the ping not of the pong.</p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src={mander} id="myImg" alt="Team_image"/>
      </div>
      <h3>Gurjot Mander</h3>
      <p className="role">Front-End Developer</p>
      <p>I am currently enrolled at BCIT in the CST program. I have just completed term 1 and moving on to term 2. I am a part of the frontend developing team, and enjoy taking part in this project.</p>
    </div>
  </div>

</div>
    );
  }