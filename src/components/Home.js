import React from 'react'
import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import About from './About'
import Contact from './Contact'
import { LogoService, LogoAbout, LogoProject, LogoContact } from './logo/Logo'
import Project from './Project'
import Service from './Service'
export default function Home() {
  //visible home / menu
  const [visible, setVisible] = useState(true)
  //animasi menu masuk
  const [open, setOpen] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)

  const [showAbout, setShowAbout] = useState(false)
  const [showProject, setShowProject] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showService, setShowService] = useState(false)

  const [trail, setTrail] = useState(false)
  const transition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const gading = () => {
    setOpenMenu(false)
    setShowAbout(false)
    setShowContact(false)
    setShowService(false)
    setTrail(false)
  }
  const about = () => {
    setOpenMenu(true)
    setOpen(false)
    setShowAbout(true)
    setShowProject(false)
    setShowContact(false)
    setShowService(false)
    setTimeout(() => {
      setTrail(true)
    }, 0)
  }
  const service = () => {
    setOpenMenu(true)
    setOpen(false)
    setShowAbout(false)
    setShowProject(false)
    setShowContact(false)
    setShowService(true)
    setTimeout(() => {
      setTrail(true)
    }, 0)
  }
  const project = () => {
    setOpen(true)
    setOpenMenu(false)
    setVisible((v) => !v)
    setShowProject((o) => !o)
    setShowAbout(false)
    setShowContact(false)
    setShowService(false)
    setTimeout(() => {
      setTrail(false)
    }, 0)
  }
  const contact = () => {
    setOpen(false)
    setOpenMenu(true)
    setShowAbout(false)
    setShowContact(true)
    setShowAbout(false)
    setShowService(false)
    setTimeout(() => {
      setTrail(true)
    }, 0)
  }
  // const home = () => {
  //   setVisible((v) => !v)
  //   setOpen(true)
  // }
  return (
    <>
      {/* <button className='absolute z-10 border-2 text-white p-2 rounded-lg' onClick={home}>
        {visible ? 'Hide' : 'Show'}
      </button> */}
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <div
              className={`${
                openMenu ? 'md:left-3/4 left-[70%] top-[7%] md:scale-50 scale-[.6]' : open ? 'open left-1/2 top-1/2' : 'left-1/2 top-1/2'
              } fixed z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000`}>
              <div className={` text-[#EBEA75] flex md:gap-8 gap-4 font-[lato]`}>
                <div
                  className='p-3 md:h-[90px] md:w-[90px] h-[60px] w-[60px] home group relative hover:-translate-y-4 cursor-pointer transition-all'
                  onClick={about}>
                  <LogoAbout />
                  <span className='absolute hidden group-hover:inline-block -bottom-6'>About</span>
                </div>
                <div
                  className='p-4 md:h-[90px] md:w-[90px] h-[60px] w-[60px] home group relative hover:-translate-y-4 cursor-pointer transition-all'
                  onClick={service}>
                  <LogoService />
                  <span className='absolute hidden group-hover:inline-block -bottom-6'>Services</span>
                </div>
                <div
                  className='p-6 md:h-[90px] md:w-[90px] h-[60px] w-[60px] home group relative hover:-translate-y-4 cursor-pointer transition-all'
                  onClick={project}>
                  <LogoProject />
                  <span className='absolute hidden group-hover:inline-block -bottom-6'>Projects</span>
                </div>
                <div
                  className='p-5 md:h-[90px] md:w-[90px] h-[60px] w-[60px] home group relative hover:-translate-y-4 cursor-pointer transition-all'
                  onClick={contact}>
                  <LogoContact />
                  <span className='absolute hidden group-hover:inline-block -bottom-6'>Contact</span>
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          <div id='open'></div>
        )
      )}
      {openMenu && (
        <div
          className={`${
            showAbout || showContact || showService ? 'gading' : 'fade-out'
          }  absolute text-[#EBEA75] font-[lato] md:left-20 left-2 top-3`}>
          <div className='flex cursor-pointer' onClick={gading}>
            <img src='/gading.png' width={150} height={150} alt='gading' />
          </div>
        </div>
      )}

      <About show={showAbout} trail={trail} />
      <Project show={showProject} close={project} />
      <Contact show={showContact} trail={trail} />
      <Service show={showService} trail={trail} />
      <div
        className={`bg-[#2C2C2C]/50 z-50 w-full fade-in fixed md:text-sm text-xs bottom-0 left-1/2 -translate-x-1/2 text-center text-[#EBEA75] font-[lato]`}>
        <p>PT Gading Teknologi Indonesia</p>
        <p>IT Solution Company,based in BDG-ID</p>
      </div>
    </>
  )
}
