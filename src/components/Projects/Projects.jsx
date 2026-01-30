import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projectsTitle">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projectsContainer">
            {project_data.map((project, index) => {
                return <img key={index} src={project.w_img} alt="" />
            })}
        </div>
        <div className="showMore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projects