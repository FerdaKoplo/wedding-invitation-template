import Carousel from "../components/Carousel"
import Nav from "../components/layout/Nav"
import { NavList } from "../constant/constant"
import { useSectionRefs } from "../hook/useSectionRefs"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Pengantar from "./Pengantar"
import WeddingEvent from "./WeddingEvent"

const Home = () => {
  const sectionRefs = useSectionRefs(NavList)

  const scrollToSection = (sectionKey: string) => {
    const sectionRef = sectionRefs[sectionKey]
    if (!sectionRef?.current) return
    
    const targetY = sectionRef.current.getBoundingClientRect().top + window.scrollY
    const startY = window.scrollY;
    const duration = 1000
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  
    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)
  
      window.scrollTo(0, startY + (targetY - startY) * easedProgress)
  
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    requestAnimationFrame(animateScroll)
  }

  return (
    <div className="flex flex-col gap-28">
      <Nav onNavClick={scrollToSection} navlist={NavList} />
      <div ref={sectionRefs['home']}>
        <Hero />
      </div>
      <Carousel />
      <div ref={sectionRefs['pengantar']}>
        <Pengantar />
      </div>
      <div ref={sectionRefs['weddingevent']}>
        <WeddingEvent />
      </div>
      <div ref={sectionRefs['gallery']}>
        <Gallery />
      </div>
    </div>
  )
}

export default Home
