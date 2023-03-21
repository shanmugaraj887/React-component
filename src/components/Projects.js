import React, { useState } from 'react'
import "../styles/projects.css"
import PerProject from './ProjectList'

const Projects = () => {
    const listProjects = [{ projectname: "Server migration", percentage: "20", taskcolor: "red" },
    { projectname: "sales Tracking", percentage: "40", taskcolor: "yellow" },
    { projectname: "Customer Database", percentage: "60", taskcolor: "blue" },
    { projectname: "Payout Details", percentage: "80", taskcolor: "skyblue" },
    { projectname: "Account Setup", percentage: "100", taskcolor: "red" },
    ]
    const btnlist = [{ btnname: "Primary", btnclass: "btn btn-primary" }
        , { btnname: "Success", btnclass: "btn btn-success" }, { btnname: "Info", btnclass: "btn btn-info" },
    { btnname: "warning", btnclass: "btn btn-warning" }, { btnname: "Danger", btnclass: "btn btn-danger" },
    { btnname: "Light", btnclass: "btn btn-light" }, { btnname: "Dark", btnclass: "btn btn-dark" }, { btnname: "Success", btnclass: "btn btn-success" }]
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="project-whole-section">
                        <div className="illustration-heading">Projects</div>
                        {listProjects.map((project, index) => (
                            <>
                                <PerProject project={project} key={index} />
                            </>
                        ))}
                    </div>
                    <div className="button-whole-section">
                        {
                            btnlist.map((btns, index) => (
                                <>

                                    <button className={btns.btnclass} key={index}>{btns.btnname}</button>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="small-box">
                        <div className="illustration-section">
                            <div className='illustration-heading'>illustration</div>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non quia excepturi
                                est adipisci! Rerum vitae voluptate, recusandae atque,
                                veritatis unde quibusdam commodi nihil iure animi culpa, delectus velit repellat.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, soluta esse
                                laboriosam, odit nesciunt ratione ut distinctio iste nam excepturi officia
                                quisquam veniam harum laudantium quaerat pariatur accusamus libero saepe?</p>
                        </div>
                    </div>
                    \<div className="small-box">
                        <div className="illustration-section">
                            <div className='illustration-heading'>illustration</div>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non quia excepturi
                                est adipisci! Rerum vitae voluptate, recusandae atque,
                                veritatis unde quibusdam commodi nihil iure animi culpa, delectus velit repellat.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, soluta esse
                                laboriosam, odit nesciunt ratione ut distinctio iste nam excepturi officia
                                quisquam veniam harum laudantium quaerat pariatur accusamus libero saepe?</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Projects