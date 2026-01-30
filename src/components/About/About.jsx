import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="aboutTitle">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="aboutSections">
        <div className="aboutLeft">
          <img src={profile_img} alt="" />
        </div>
        <div className="aboutRight">
          <div className="aboutParagraph">
            <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="aboutSkills">
            <div className="aboutSkill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="aboutSkill"><p>ReactJS</p><hr style={{width:"70%"}} /></div>
            <div className="aboutSkill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
            <div className="aboutSkill"><p>NodeJS</p><hr style={{width:"50%"}} /></div>

          </div>
        </div>
      </div>
      <div className="aboutAchievements">
        <div className="aboutAchievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>90</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About