import { useState, useEffect } from 'react'

export default function useScrollbarWidth() {
  const [windowScroll, setWindowScroll] = useState()
  useEffect(() => {
    setWindowScroll(window.innerWidth - document.documentElement.clientWidth)
  }, [windowScroll])
  return windowScroll
}
