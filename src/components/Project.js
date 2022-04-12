import { useRef, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { LogoBackArrow } from './logo/Logo'
import useClientRect from '../utils/useClientRect'
import useMediaQuery from '../utils/useMediaQuery'
export default function Project({ show, close }) {
  const matches = useMediaQuery('(min-width: 768px)')
  const [rect, ref] = useClientRect()
  const refClient = useRef()
  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  let zIndex = 1
  const flip = (e) => {
    const gridWidth = rect.width
    const checked = e.target.checked
    const card = e.target.parentNode
    const cardInner = e.target.previousSibling
    const top = cardInner.getBoundingClientRect().top
    const left = cardInner.getBoundingClientRect().left
    const scrollWidth = window.innerWidth - refClient.current.getBoundingClientRect().width

    if (checked) {
      cardInner.style.transform = `translate(calc(50vw - 50% - ${left}px - ${
        scrollWidth === 0 ? 0 : scrollWidth - 9
      }px), calc((50vh - 50%) - ${top}px)) rotateY(180deg)`
      cardInner.style.width = `${matches ? gridWidth : window.innerWidth}px`
      cardInner.style.height = matches ? '530px' : '300px'
      card.style.zIndex = zIndex
    } else {
      cardInner.style = ''
      card.style = ''
    }
    zIndex++
  }
  const refClipEnter = useCallback(
    (r) => {
      if (r != null) {
        let y = r.attributes['data-transform'].value.split(' ')
        matches ? (y = y[0]) : (y = y[1])
        r.animate(
          // keyframes
          {
            transform: [`translateY(${y}%)`, `translateY(${y}%)`, 'translateY(0%)', `translateY(${matches ? '-7' : '7'}%)`, 'translateY(0%)'],
            offset: [0, 0.7, 0.8, 0.9, 1],
            easing: 'ease-out',
          },
          {
            // timing options
            duration: 1000,
            iterations: 1,
          }
        )
      }
    },
    [matches]
  )
  return transition((style, item) =>
    item ? (
      <div className='xl:px-44 md:px-20 px-2 w-full absolute top-10' ref={refClient}>
        <div
          className={`${
            show ? 'fade-in' : 'fade-out'
          } z-50 sticky top-10 md:p-4 p-3 md:h-[45px] md:w-[45px] h-[35px] w-[35px] home group cursor-pointer `}
          onClick={close}>
          <LogoBackArrow />
        </div>
        <animated.div style={style}>
          <div className='grid place-items-center font-[lato]'>
            <div className='grid xl:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto] grid-cols-[auto] gap-20 text-center' ref={ref}>
              <label htmlFor='card-1' className='flip-card md:z-0 z-[2]' ref={refClipEnter} data-transform='50 0'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Travel Agency </h1>
                    <p>Ticket & Trip Management</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='travel.jpg' alt='gambar' className='md:h-[400px] h-[300px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-xl font-bold mt-2'>Travel Agency </h1>
                      <p>Ticket & Trip Management</p>
                    </div>
                  </div>
                </div>
                <input id='card-1' type='checkbox' onClick={flip} hidden />
              </label>
              <label htmlFor='card-2' className='flip-card md:z-0 z-[1]' ref={refClipEnter} data-transform='70 -100'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Restaurant</h1>
                    <p>Reservasion Page</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='restaurant.jpg' alt='gambar' className='h-[400px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-2xl font-bold'>Restaurant</h1>
                      <p>Reservasion Page</p>
                    </div>
                  </div>
                </div>
                <input id='card-2' type='checkbox' onClick={flip} hidden />
              </label>
              <label htmlFor='card-3' className='flip-card z-0' ref={refClipEnter} data-transform='90 -200'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Online Shop </h1>
                    <p>E-Commerce</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='shop.jpg' alt='gambar' className='h-[400px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-xl font-bold'>Online Shop </h1>
                      <p>E-Commerce</p>
                    </div>
                  </div>
                </div>
                <input id='card-3' type='checkbox' onClick={flip} hidden />
              </label>
              <label htmlFor='card-4' className='flip-card z-0'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Beauty Treatment </h1>
                    <p>Landing Page</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='travel.jpg' alt='gambar' className='h-[400px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-xl font-bold'>Beauty Treatment </h1>
                      <p>Landing Page</p>
                    </div>
                  </div>
                </div>
                <input id='card-4' type='checkbox' onClick={flip} hidden />
              </label>
              <label htmlFor='card-5' className='flip-card z-0' ref={refClipEnter} data-transform='10 0'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Architect </h1>
                    <p>Studio Galery</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='travel.jpg' alt='gambar' className='h-[400px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-xl font-bold'>Architect </h1>
                      <p>Studio Galery</p>
                    </div>
                  </div>
                </div>
                <input id='card-5' type='checkbox' onClick={flip} hidden />
              </label>
              <label htmlFor='card-6' className='flip-card z-0' ref={refClipEnter} data-transform='20 0'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold'>Coffe Roastery </h1>
                    <p>COGS Management</p>
                  </div>
                  <div className='flip-card-back overflow-hidden md:p-10 p-0'>
                    <img src='travel.jpg' alt='gambar' className='h-[400px] w-full' />
                    <div className='md:inline-block hidden'>
                      <h1 className='text-xl font-bold'>Coffe Roastery </h1>
                      <p>COGS Management</p>
                    </div>
                  </div>
                </div>
                <input id='card-6' type='checkbox' onClick={flip} hidden />
              </label>
            </div>
          </div>
        </animated.div>
      </div>
    ) : null
  )
}
