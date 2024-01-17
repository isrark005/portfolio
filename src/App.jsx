import { useState } from 'react'
import './App.css'
import { MenuBtn } from './Components/Menu-btn'

function App() {
  const gradientColor = ' from-[#DBFF00] via-[#4DF4FF] via--[#DBFF00] to-[#4DF4FF] '

  return (
    <main>
      <div className="first-fold p-4">
        <nav className='nav container-custom flex justify-end gap-5'>
          <MenuBtn content={'About us'} />
          <MenuBtn content={'Projects'} />
          <MenuBtn content={'Contact'} />
        </nav>

        {/* Hero Header starts */}
        <section className='hero-section container-custom'>
          <div className="hero-info">
            <h1>Hello</h1>
            <h3>Iam Israr</h3>
          </div>
        </section>
        {/* Hero Header ends */}
        <section className='front-end container-custom' >Front-end Developer</section>
        <section className='info container-custom'>
          <div className="info-inner">Based in Mumbai, India</div>
          <div className="info-inner">2+ years of work exp.</div>
          <div className="info-inner">Download my resume {/* Icon */}</div>
          <div className="info-inner">Care for a song? {/* Icon */}</div>
        </section>
      </div>


      {/* about section */}
      <section className="about-us">
        <div className="about-left">
          <div className="scroll-bar">

            </div>
          <div className="about-image"><img src="" alt="" /></div>
          </div>
        <div className="about-right">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsa expedita adipisci sequi architecto reiciendis? Eum sed nisi aut? Numquam animi molestiae eveniet corrupti cum? Expedita dolorem aperiam perferendis laboriosam praesentium quos delectus? Architecto, maiores hic placeat dolorum consectetur impedit, molestiae tempora quidem odio a dignissimos voluptas qui esse suscipit.</p>
        </div>
      </section>
      {/* end of about section */}
    </main>
  )
}

export default App
