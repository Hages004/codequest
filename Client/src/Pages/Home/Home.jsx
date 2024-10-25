  import Leftsidebar from "../../Components/Left-sidebar/Leftsidebar.jsx"
  import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar.jsx"
  import Homemainbar from "../../Components/Homemainbar/Homemainbar.jsx"
  import '../../App.css'
function Home(slidein) {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home
