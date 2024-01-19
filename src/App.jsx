import { useState } from "react";
import "./App.css";
import { MenuBtn } from "./Components/Menu-btn";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaMusic } from "react-icons/fa";
import  aboutImage  from './assets/about-me.png'
import  metalImage  from './assets/metal-form.png'
import  nfakImg  from './assets/nfak-img.png'
import { SlOptions } from "react-icons/sl";

function App() {
  const gradientColor =
    " from-[#DBFF00] via-[#4DF4FF] via--[#DBFF00] to-[#4DF4FF] ";
    const [overlay, setOverlay] = useState(false)

  const onHover = (e) => {
    setOverlay(true);
    
  }
  const offHover = (e) => {
  
    setOverlay(false);
  }




  return (
    <main>
    {overlay  && <div className={`overlay w-[100vw] h-[100vh] fixed  bg-black opacity-50 z-[100]`}></div>}
      <div className="first-fold p-6">
        <nav className="nav container-custom flex justify-end gap-5">
          <MenuBtn content={"About us"} />
          <MenuBtn content={"Projects"} />
          <MenuBtn content={"Contact"} />
        </nav>

        {/* Hero Header starts */}
        <section className="hero-section container-custom h-[90vh] grid content-center">
          <div className="hero-info w-fit m-auto mb-[-230px]">
            <h1 className=" text-[230px] leading-[0.9em] text-[#DBFF00]">Hello</h1>
            <h3 className="heading text-[84px] leading-[1em] text-right ">Iam Israr</h3>
          </div>
        </section>

        <section className="front-end container-custom heading text-4xl mb-8 mt-40">
          Front-end Developer
        </section>
        {/* Hero Header ends */}

        <section className="info container-custom flex flex-nowrap items-center mb-40">
          <div className="info-inner">
            <div className="info-inner-box">
              Based in <br />
              Mumbai, India
            </div>
          </div>
          <div className="info-inner">
            <div className="info-inner-box">
              2+ years of
              <br /> work exp.
            </div>
          </div>
          <div className="info-inner flex flex-nowrap items-center justify-evenly gap-3">
            <span className="ml-8">
              Download <br />
              my resume
            </span>
            <span className="rounded-full w-16 h-16 bg-[#DBFF00] text-black flex justify-center items-center text-[32px] ">
              <LiaDownloadSolid />
            </span>
          </div>

          <div className="info-inner m-auto flex items-center justify-center gap-7 text-[28px]">
            Care for a song?
            <span className="rounded-full w-16 h-16 bg-[#4DF4FF] text-black flex justify-center items-center text-[32px] relative ">
              <span className="z-10">
                <FaMusic />
              </span>
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DF4FF] opacity-75 "></span>
            </span>
          </div>
        </section>
      </div>

      {/* about section */}
      <section className="about-us container-custom flex my-20">
        
        <div className="about-left w-6/12 ">
          <div className="about-wrap p-5 rounded-3xl w-10/12 bg-[#262626] ">
          <div className="bar-main mb-5 rounded-[12px] h-12 bg-gradient-to-r from-[#4cf4fe] to-[#3b9aa0]">
            <div className="inner-bar rounded-[12px] flex flex-nowrap px-3 py-2  h-12 bg-gradient-to-r from-[#DBFF00] to-[#A0FB6A]">
                <div className="bar-pusher h-full w-0"></div>
                <div className="bar-scroller w-[60px] bg-white h-full rounded-md border-5 border-[#BBD905]"></div>
            </div>
          </div>
          <div className="about-image relative">
            <img src={aboutImage} alt="" />
            <img src={metalImage} alt="" className="metal-spining absolute left-[15%] bottom-[20%] w-8/12 animate-spin "/>
          </div>
          </div>
        </div>

        <div className="about-right w-6/12 flex flex-col">
          <h2 className="heading text-6xl">About us</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            ipsa expedita adipisci sequi architecto reiciendis? Eum sed nisi
            aut? Numquam animi molestiae eveniet corrupti cum? Expedita dolorem
            aperiam perferendis laboriosam praesentium quos delectus?
            Architecto, maiores hic placeat dolorum consectetur impedit,
            molestiae tempora quidem odio a dignissimos voluptas qui esse
            suscipit.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            ipsa expedita adipisci sequi architecto reiciendis? Eum sed nisi
            aut? Numquam animi molestiae eveniet corrupti cum? Expedita dolorem
            aperiam perferendis laboriosam praesentium quos delectus?
            Architecto, maiores hic placeat dolorum consectetur impedit,
            molestiae tempora quidem odio a dignissimos voluptas qui esse
            suscipit.
          </p>

        <div className="cards-container flex-grow-[1] relative">
           
            <div onMouseOver={onHover} onMouseLeave={offHover} className="card bg-[#DBFF00] text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-0 left-0  hover:translate-y-[-20px] hover:z-[101] transition-all duration-500">
              <div className="image w-32"><img src={nfakImg} alt="nusrat fateh ali khan singing qawwali"/></div>
              <div className="title heading text-3xl ml-3">CSS <br />Enthusiast</div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#C2E105]"><SlOptions /></div>
            </div>
            <div onMouseOver={onHover} onMouseLeave={offHover} className="card bg-[#4CF4FF] text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-[90px] left-[55px] rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500">
              <div className="image w-32"><img src={nfakImg} alt="nusrat fateh ali khan singing qawwali"/></div>
              <div className="title heading text-3xl ml-3">Ghazal Geek <br/> on Fridays</div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#2CBFC9]"><SlOptions /></div>
            </div>
            <div onMouseOver={onHover} onMouseLeave={offHover} className="card bg-white text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-[150px] left-[70px] -rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500">
              <div className="image w-32"><img src={nfakImg} alt="nusrat fateh ali khan singing qawwali"/></div>
              <div className="title heading text-3xl ml-3">Gaming is a  <br/>love language</div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#D9D9D9]"><SlOptions /></div>
            </div>
           
        </div>


        </div>
      </section>
      {/* end of about section */}
    </main>
  );
}

export default App;
