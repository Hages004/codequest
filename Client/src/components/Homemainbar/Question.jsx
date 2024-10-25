import React from 'react'
import { Link } from 'react-router-dom'
import "./Homemainbar.css"

import moment from 'moment'
function Question({ question }) {
    return (
        <div className="display-question-container">
            <div className="display-votes-ans">
                <p>{question.upvote.length - question.downvote.length}</p>
                <p>votes</p>
            </div>
            <div className='display-vtoes-ans'>
                <p>{question.noofanswers}</p>
                <p>Answers</p>
            </div>
            <div className='display-question-details'>
                <Link to={`/Question/${question._id}`} className='question-title-link'>
                    {question.questiontitle.length > (window.innerHeight <= 400 ? 70 : 90) ?
                        question.questiontitle.substring(0, window.innerWidth <= 400 ? 70 : 90) + "..." : question.questiontitle}
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {question.questiontags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    <p className="display-time">asked{moment(question.askdon).fromNow()}{question.userposted}</p>
                </div>
            </div>
        </div>)
}

export default Question