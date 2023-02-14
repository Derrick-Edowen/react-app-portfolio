import React from "react";
import profileImage from "../../assets/large/PROFILE.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Derrick Edowen. I am 25 years old. I have an honours 
            B.Sc. in Biological Sciences, and graduated from  Brock University. I currently work in
            the electrical engineering field as well as  real  estate. However I  am  currently enrolled in 
            U of T coding bootcamp to acquire a full stack developer position,  that I  believe I will help  me 
            achieve my goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
