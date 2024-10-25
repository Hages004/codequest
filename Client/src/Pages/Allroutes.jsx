import {Route,Routes} from 'react-router-dom'
import Home from "./Home/Home.jsx"
import Askquestions from "./Askquestions/Askquestions.jsx"
import Auth from './Auth/Auth.jsx'
import Question from './Question/Question.jsx'
import Displayquestion from './Question/Displayquestion.jsx'
import Tags from '../Pages/Tags/Tag.jsx'
import Users from './Users/Users.jsx'
import Userprofile from './Userprofile/Userprofile.jsx'
function Allroutes( Slidein,handleslidein) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home Slidein={Slidein} handleslidein={handleslidein}/>}></Route>
        <Route path='/Askquestions' element={<Askquestions/>}></Route>
        <Route path='/Auth' element={<Auth/>}></Route>
        <Route path='/Question' element={<Question Slidein={Slidein} handleslidein={handleslidein}/>}></Route>
        <Route path='/Question/:id' element={<Displayquestion Slidein={Slidein} handleslidein={handleslidein}/>}></Route>
        <Route path='/Tags' element={<Tags Slidein={Slidein} handleslidein={handleslidein}/>}></Route>
        <Route path='/Users' element={<Users Slidein={Slidein} handleslidein={handleslidein}/>}></Route>
        <Route path='/Users/:id' element={<Userprofile Slidein={Slidein} handleslidein={handleslidein}/>}></Route>

      </Routes>

    </div>
  )
}

export default Allroutes

