import React from 'react'
import { useTransition, animated } from 'react-spring'
export default function About({ show, trail }) {
  const transition = useTransition(show, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 },
    trail: trail ? 0 : 2000,
  })
  return transition((style, item) =>
    item ? (
      <>
        <animated.div style={style}>
          <div className='font-[lato] absolute top-24 md:left-24 left-4 flex flex-col gap-5 md:pr-10 pr-2'>
            <div>
              <h1 className='text-[#EBEA75] md:text-xl text-base'>Overview</h1>
              <p className='text-[#E0E0E0] md:text-base text-xs'>
                A company that provide services and solution for technology-based information system
              </p>
            </div>
            <div>
              <h1 className='text-[#EBEA75] md:text-xl text-base'>Purpouse</h1>
              <p className='text-[#E0E0E0] md:text-base text-xs'>To be a solution company in the development of international creative technology</p>
            </div>
            <div>
              <h1 className='text-[#EBEA75] md:text-xl text-base'>Target</h1>
              <ul className='list-disc md:list-inside list-outside text-[#E0E0E0] md:text-base text-xs'>
                <li>Exploring science that is relevant to the phenomenon of society</li>
                <li>Creating dynamic technology for the general public</li>
                <li>Provide innovative and varied system integration solutions according to user expectations</li>
              </ul>
            </div>
            <div className='text-[#E0E0E0] max-w-7xl text-justify'>
              <h1 className='text-[#EBEA75] md:text-xl text-base'>About Us</h1>
              <p className='leading-5 mt-1  md:text-base text-xs'>
                We are a company engaged in the field of information technology. We believe that information technology can lead us to a better
                future, with the help of technologies. We can provide advances in information technology for a better future based on the innovations
                that we continue to develop. By applying the principle of “problems solve based”, we will always put the user's main needs as our
                priority.
              </p>
              <p className='mt-3  md:text-base text-xs'>
                We can provide solutions for problems related to information. We always try to develop technology that suits the problems faced by
                mankind.
              </p>
              <p className='mt-3  md:text-base text-xs'>
                We will become something known as a company that has positive values, if you are a part of it.
              </p>
              <p className='mt-3  md:text-base text-xs'>
                We strive to be a solution company in the development of international creative technology. So we will continue to explore science
                that is relevant to the phenomenon of society. In addition, we also have a work program to create dynamic technology for the general
                public.
              </p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </animated.div>
      </>
    ) : null
  )
}
