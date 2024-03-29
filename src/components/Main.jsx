import Notification from "./Notification"
import Nav from "./Nav"
import Hero from "./Hero"
import Features from "../pages/Features"
import Purposes from "../pages/Purposes"
import System from "../pages/System"
import Approval from "../pages/Approval"
import Video from "./Video"
import Services from "../pages/Services"
import Key from "../pages/Key"
import List from "../pages/List"
import Customers from "../pages/Customers"
import Footer from "../pages/Footer"





function Main() {
  return (
    <div>
        <Notification/>
        <Nav/>
        <Hero/>
        <Features />
        <Purposes/>
        <System/>
        <Approval/>
        <Video/>
        <Services/>
        <Key/>
        <List/>
        <Customers/>
        <Footer/>
    </div>
  )
}

export default Main