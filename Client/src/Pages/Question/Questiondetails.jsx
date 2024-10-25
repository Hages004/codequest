import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import moment from 'moment'
import upvote from '/public/upvote.svg'
import downvote from '/public/downvote.svg'
import './Question.css'
import Dispalyanswer from './Displayanswer.jsx'
import Avatar from '../../components/Avatar/Avatar.jsx'
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletequestion, votequestion, postanswer } from "../../action/question.js"

function Questiondetails() {
  const [Answers, setAnswer] = useState("")
  const dispatch=useDispatch()
  const questionlist = useSelector((state) => state.questionreducer)
  const { id } = useParams()
  const user = useSelector((state) => state.currentuserreducer)
  const location = useLocation()
  const navigate = useNavigate()
  const url = "http://Localhost:3000"
  const handlepostans = (e, answerlength) => {
    if (user == null) {
      alert("Login or signup to answer a question")
      navigate("/Auth")
    } else {    
      if (Answers === "") {
      alert("Enter answer before submitting")
    } else {
      dispatch(postanswer({id,noofanswers:answerlength+1,answerbody:answer,useranswered:user.result.name}))
      setanswer("")
    }
  }}  
  const handledelete = () => {
    dispatch(deletequestion(id,navigate))

  }
  const handleupvote = () => {
    if (user === null){
      alert("Login or signup to answer a question")
    navigate("./Auth")}
    else{
      dispatch(votequestion(id,"upvote"))
    }
  }
  const handledownvote = () => {
    if (user === null){
      alert("Login or signup to answer a question")
    navigate("./Auth")}
    else{
      dispatch(votequestion(id,"downvote"))
    }
  }
  const handleshare = () => {
    copy(url + location.pathname)
    alert("copied url: " + url + location.pathname)
  }
  const [answer, setanswer] = useState("")
  return (
    <div className="question-details-page">
      {questionlist.data === null ? (
        <h1>Loading......</h1>
      ) : (
        <>
          {questionlist.data.filter((question) => question._id === id).map((question) => (
            <div key={question._id}>
              <section className='question-details-container'>
                <h1>{question.questiontitile}</h1>
                <div className="question-details-container2">
                  <div className="question-votes">
                    <img src={upvote} alt="upvote" width={18} className='votes-icon' onClick={handleupvote} />
                    <p>{question.upvote.length - question.downvote.length}</p>
                    <img src={downvote} alt="upvote" width={18} className='votes-icon' onClick={handledownvote} />
                  </div>
                  <div style={{ width: "100%" }}>
                    <p className='question-body'>{question.questionbody}</p>
                    <div className='question-details-tags'>
                      {question.questiontags.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                    <div className='question-actions-user'>
                      <div>
                        <button type='button' onClick={handleshare}>Share</button>
                        {user?.result?._id === question?.userid && (
                          <button type='button' onClick={handledelete}>Delete </button>
                        )}
                      </div>
                      <div>
                        <p>Asked {moment(question.askdon).fromNow()}</p>
                        <Link to={`users/${question.userid}`} className=' user-link' style={{ color: '#0086d8' }}>
                          <Avatar backgroundcolor="orange" px={8} py={5} borderRadius={4}>
                            {question.userposted.charAt(0).toUpperCase()}
                          </Avatar>
                          <div>
                            {question.userposted}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {question.noofanswers !== 0 && (
                <section>
                  <h3>{question.noofanswers} Answers</h3>
                  <Dispalyanswer key={question._id} question={question} handleshare={handleshare} />
                </section>
              )}
              <section className="post-ans-container">
                <h3>Your answers</h3>
                <form onSubmit={(e) => {
                  handlepostans(e, question.answer.length)
                }}>
                  <textarea name='' id='' cols={30} rows={10} value={answer} onChange={(e) => setanswer(e.target.value)}></textarea>
                  <br />
                  <input type='submit' className='post-ans-btn' value={"Post your answer"} />
                </form>
                <p>Browse other questions tagged
                  {question.questiontags.map((tag) => (
                    <Link to="/tags" key={tag} className='ans-tag'>
                      {" "}
                      {tag}{" "}
                    </Link>
                  ))}{" "}
                  or
                  <Link to="/Askquestion" style={{ textDecoration: "none", color: "Orange" }}> </Link>
                </p>
              </section>
            </div>
          ))}
        </>
      )}
    </div>
  )

}
export default Questiondetails
