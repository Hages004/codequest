import "./Homemainbar.css"
import { useLocation, useNavigate } from "react-router"
import { useSelector } from "react-redux"
import Questionlist from "./Questionlist";
import "./Homemainbar.css"
function Homemainbar() {
  const user = useSelector((state) => state.currentuserreducer)
  const questionlist = useSelector((state) => state.questionreducer)
  console.log(questionlist)
  const location = useLocation();
  const navigate = useNavigate();
  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question")
      navigate("/Auth")
    }
    else {
      navigate("/Askquestions")
    }
  }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (<h1>Top Question</h1>) : (<h1>All Questions</h1>)}
        <button className="ask-btn" onClick={checkauth} >Ask Questions </button>
      </div>
      <div>
      {questionlist.data === null ? (<h2>Loading.....</h2>) : (<> <p> {questionlist.data.length} Questions</p>
        <Questionlist questionlist={questionlist.data} /> </>)}
    </div>
    </div>
  )
}

export default Homemainbar
