import React from 'react'
import moment from 'moment'
import { Link,useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar.jsx'
import { useDispatch,useSelector } from 'react-redux'
import { deleteanswer } from '../../action/question.js'
function Displayanswer({ question, handleshare }) {
  const user = useSelector((state) => state.currentuserreducer)
  const { id }=useParams()
  const dispatch = useDispatch()
  const handledelete = (answerid, noofanswers) => {
    dispatch(deleteanswer(id,answerid,noofanswers -1))
  }
  return (
    <div>
      {question.answer.map((ans) => (
        <div className='display-ans'>
          <p>{ans.answerbody}</p>
          <div className="questions-action-user">
            <div>
              <button type='button' onClick={handleshare}>Share</button>
              {user?.result?._id === ans?.userid && (
                <button type='button' onClick={() => handledelete(ans._id, question.noofanswers)}>Delete</button>
              )}
            </div>
            <div>
            <p>Answered{moment(ans.answerdon).fromNow()}</p>
            <Link to={`users/${ans.userid}`} className=' user-link' style={{ color: '#0086d8' }}>
              <Avatar backgroundcolor={orange} px={8} py={5} borderRadius={4}>
                {ans.useranswered.charAt(0).toUpperCase()}
              </Avatar>
              <div>
                {ans.useranswered}
              </div>
            </Link>
            </div>
          </div>
        </div>

      ))}</div>
  )
}

export default Displayanswer