import React from 'react'
import './App.css'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const App = () => {


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


  useGSAP (()=> {
   const tl = gsap.timeline({
        scrollTrigger:{
        trigger:"#section-1",
        start:"top top",
        markers:true,
        scrub: true,
        endTrigger:"#section-4",
        end:"top top",
      
     }
   })
   tl.to("html", {
    backgroundColor:"#04193e"
   })
   .to("html", {
    backgroundColor:"#31072d"
   })
   .to("html", {
    backgroundColor:"#406a37"
   })
  }, [])

  return (
   <main>
    <section id='section-1'>section 1</section>
    <section id='section-2'>section 2</section>
    <section id='section-3'>section 3</section>
    <section id='section-4'>section 4</section>
   </main>
  )
}

export default App
