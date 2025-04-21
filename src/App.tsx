import { useEffect, useState } from 'react'
import Index from './scenes/navbar/Index'
import Links from './scenes/navbar/Links'
import { SelectedPage } from '@/shared/types'
import Home from './scenes/home/Home'
import Benefits from './scenes/benefits/Benefits'
import OurClasses from './scenes/ourClasses/OurClasses'
import ContactUs from './scenes/contactUs/ContactUs'
import Footer from './scenes/footer/Footer'


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <>
      <Index isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

      <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={''}/>

      <Home setSelectedPage={setSelectedPage}/>

      <Benefits setSelectedPage={setSelectedPage}/>

      <OurClasses setSelectedPage={setSelectedPage}/>

      <ContactUs setSelectedPage={setSelectedPage}/>

      <Footer />
    </>
  )
}

export default App
