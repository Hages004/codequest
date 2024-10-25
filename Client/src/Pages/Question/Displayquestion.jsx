import Leftsidebar from "../../Components/Left-sidebar/Leftsidebar.jsx"
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar.jsx"
import Questiondetails from "./Questiondetails.jsx"
function Displayquestion({slidein}) {
  return (
      <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Questiondetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Displayquestion
