
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import City from "./Components/City"
import Youtube from "./Components/Youtube"
import Verified from "./Components/Verified"
import Works from "./Components/Works"
import Footer from "./Components/Footer"

const App = () => {
  return (
<main className="  bg-[#FFFFFF]  max-h-screen  max-w-full">
<Navbar/>
<Hero/>
<City/>
<Youtube/>
<Verified/>
<Works/>
<Footer/>

</main>
  )
}

export default App