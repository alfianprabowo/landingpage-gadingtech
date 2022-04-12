import React from 'react'
import { useTransition, animated } from 'react-spring'
import { LogoArrow } from './logo/Logo'
export default function Service({ show, trail }) {
  const transition = useTransition(show, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 },
    trail: trail ? 0 : 2000,
  })

  const detail = (e) => {
    const title = e.currentTarget
    const content = title.nextSibling
    const arrow = title.lastChild

    if (content.style.maxHeight) {
      content.style.maxHeight = null
      arrow.style.transform = null
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`
      arrow.style.transform = 'rotateX(180deg)'
    }
  }
  return transition((style, item) =>
    item ? (
      <>
        <animated.div style={style}>
          <div className='font-[lato] absolute top-24 md:left-24 left-0 flex flex-col gap-5 md:pr-10 p-2 md:w-[80%] w-full'>
            <div className='text-black'>
              <div className='flex items-center bg-[#E0E0E0] p-5 rounded-xl cursor-pointer' onClick={detail}>
                <span className='flex-grow'>Creative Design</span>
                <span className='w-7 transition-transform duration-300'>
                  <LogoArrow />
                </span>
              </div>
              <div className='flex flex-col -mt-3 max-h-0 bg-[#E0E0E0] overflow-hidden transition-all ease-linear rounded-bl-xl rounded-br-xl'>
                <div className='pl-10 py-2'>
                  <p>Company Profile</p>
                  <p>Marketing Tools</p>
                  <p>Product Campaign</p>
                  <p>Digital Marketing</p>
                  <p>UI/UX</p>
                  <p>Etc.</p>
                </div>
              </div>
            </div>
            <div className='text-black'>
              <div className='flex items-center bg-[#E0E0E0] p-5 rounded-xl cursor-pointer' onClick={detail}>
                <span className='flex-grow'>Web Development</span>
                <span className='w-7 transition-transform duration-300'>
                  <LogoArrow />
                </span>
              </div>
              <div className='flex flex-col -mt-3 max-h-0 bg-[#E0E0E0] overflow-hidden transition-all ease-linear rounded-bl-xl rounded-br-xl'>
                <div className='pl-10 py-2'>
                  <p>Landing Page</p>
                  <p>Web Store</p>
                  <p>Sales Form</p>
                  <p>Inventory Management</p>
                  <p>Ecommerce</p>
                  <p>ERP</p>
                  <p>Etc.</p>
                </div>
              </div>
            </div>
            <div className='text-black'>
              <div className='flex items-center bg-[#E0E0E0] p-5 rounded-xl cursor-pointer' onClick={detail}>
                <span className='flex-grow'>Mobile Development</span>
                <span className='w-7 transition-transform duration-300'>
                  <LogoArrow />
                </span>
              </div>
              <div className='flex flex-col -mt-3 max-h-0 bg-[#E0E0E0] overflow-hidden transition-all ease-linear rounded-bl-xl rounded-br-xl'>
                <div className='pl-10 py-2'>
                  <p>Project Management</p>
                  <p>Document Maker</p>
                  <p>Point Of Sales</p>
                  <p>Inventory Management</p>
                  <p>ERP</p>
                  <p>Human Resource Management</p>
                  <p>CRM</p>
                  <p>Asset Management System</p>
                  <p>Accounting System</p>
                  <p>Etc.</p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </>
    ) : null
  )
}
