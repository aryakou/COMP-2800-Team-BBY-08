import React from "react";
import "./About.css";

export default function About() {
    return (

<div class="wrapper">
  <h1>Our Team</h1>
  <div class="team">
    <div class="team_member">
      <div class="team_img">
        <img src="https://image.flaticon.com/icons/svg/23/23171.svg" alt="Team_image"/>
      </div>
      <h3>Arash</h3>
      <p class="role">developer</p>
      <p>I recently completed my first term at BCIT in the Computer Systems Technology program. My hobbies include working on motorcycles and computers , I look forward to the green notes project!</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src="https://image.flaticon.com/icons/svg/23/23171.svg" alt="Team_image"/>
      </div>
      <h3>Arya</h3>
      <p class="role">developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src="https://image.flaticon.com/icons/svg/23/23171.svg" alt="Team_image"/>
      </div>
      <h3>Sandher</h3>
      <p class="role">developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src="https://image.flaticon.com/icons/svg/22/22999.svg" alt="Team_image"/>
      </div>
      <h3>Mander</h3>
      <p class="role">developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
  </div>

</div>
    );
  }