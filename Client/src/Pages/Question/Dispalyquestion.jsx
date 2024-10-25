import Questiondetails from "./Questiondetails.jsx"
import Leftsidebar from "../../Components/Left-sidebar/Leftsidebar.jsx"
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar.jsx"

function Dispalyquestion({slidein}) {
  return (
<div className="home-container-1">
    <Leftsidebar slidein={slidein}/>
    <div className="home-container-2">
      <Questiondetails/>
      <Rightsidebar/>
    </div>
  </div>  )
}

export default Dispalyquestion