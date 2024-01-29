import React from 'react'
import {personalProject, currencyConverter, newsProject, portfolioWebsite} from '../assets/imgIndex'

export function MyProjectsSection() {
    

    return (
        <section id='projects' className="my-projects z-[150]  my-20 max-md:mt-[140px]">
          <div className="heading text-6xl text-center z-[150]">
            <h2>My Projects</h2>
          </div>
          <div className="projects  mt-20 flex flex-wrap justify-between container-custom z-[150] max-md:mt-12">
            <div className="project z-[150]  w-[643px] bg-black border-white rounded-2xl border-4 p-10">
              <div className="project-upper flex">
                <div className="content w-8/12">
                  <h3 className="heading text-4xl">Personal Blog</h3>
                  <p className="max-md:mr-[-50%] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div className="btn-container w-4/12 ">
                  <a href="" className="project-link relative float-right w-[90px] h-[90px] bg-[#DBFF00] grid content-center text-black heading rounded-full">
                    <button className="project-go-btn  overflow-hidden text text-3xl">Go</button>
                    </a>
                </div>
              </div>
              <div className="project-bottom mt-10">
                <img src={personalProject} className="border-4 border-[#DBFF00] " alt="" />
              </div>
            </div>
            <div className="project z-[150]  w-[643px] bg-black border-white rounded-2xl border-4 p-10">
              <div className="project-upper flex">
                <div className="content w-8/12">
                  <h3 className="heading text-4xl">Currency converter</h3>
                  <p className="max-md:mr-[-50%] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div className="btn-container w-4/12 ">
                  <a href="" className="project-link relative float-right w-[90px] h-[90px] bg-[#DBFF00] grid content-center text-black heading rounded-full">
                    <button className="project-go-btn  overflow-hidden text text-3xl">Go</button>
                    </a>
                </div>
              </div>
              <div className="project-bottom mt-10">
                <img src={currencyConverter} className="border-4 border-[#DBFF00] " alt="" />
              </div>
            </div>
            <div className="project w-[643px] bg-black border-white rounded-2xl border-4 p-10">
              <div className="project-upper flex">
                <div className="content w-8/12">
                  <h3 className="heading text-4xl">News search engine</h3>
                  <p className="max-md:mr-[-50%] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div className="btn-container w-4/12 ">
                  <a href="" className="project-link relative float-right w-[90px] h-[90px] bg-[#DBFF00] grid content-center text-black heading rounded-full">
                    <button className="project-go-btn  overflow-hidden text text-3xl">Go</button>
                    </a>
                </div>
              </div>
              <div className="project-bottom mt-10">
                <img src={newsProject} className="border-4 border-[#DBFF00] " alt="" />
              </div>
            </div>
            <div className="project w-[643px] bg-black border-white rounded-2xl border-4 p-10">
              <div className="project-upper flex">
                <div className="content w-8/12">
                  <h3 className="heading text-4xl">Personal Portfolio</h3>
                  <p className="max-md:mr-[-50%] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div className="btn-container w-4/12 ">
                  <a href="" className="project-link relative float-right w-[90px] h-[90px] bg-[#DBFF00] grid content-center text-black heading rounded-full">
                    <button className="project-go-btn  overflow-hidden text text-3xl">Go</button>
                    </a>
                </div>
              </div>
              <div className="project-bottom mt-10">
                <img src={portfolioWebsite} className="border-4 border-[#DBFF00] " alt="" />
              </div>
            </div>
            
          </div>
      </section>
    )
}
