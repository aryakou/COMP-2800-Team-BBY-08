import React from "react";
import "./About.css";
import gsand from'./gsand.png';
import mander from './gmander.png';
import arash from './arash.png';
import arya from './arya.png';

export default function About() {
    return (

<div className="wrapper">
  <div className="team">
  <div className="ourstory">
      <h2>Our Story</h2>
      <p>Meta Molog is an app created for those struggling with getting through this unprecedented time. With Meta Molog, users can have confidence that their journal entries and attachments are 100% secured on the cloud and our privacy standard is an all time high. Users can sign up, log in and create entries that are only visible by them. With our multiple steps of authentication, Meta Molog is the best option on the market.
</p>
    </div>
    <div className='aaa'>
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

</div>
    );
  }