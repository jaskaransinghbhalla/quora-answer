import React from 'react'

const Answer = (props) => {
    return (
        <div className='answer-div'>
            <div className='author-info'>
                <img className="author-img" alt='author' src={props.authorimg}></img>
                <div>
                    <h4 className='author-name'>{props.authorn}</h4>
                </div>
            </div>
            <div className='answer-text'>{props.answer}</div>
            <div className='question-container'>
                <button className='upvote'>Upvote &uarr; {props.upvotes} </button>
                <button className='downvote'> &darr;</button>
                <button className='other comment'><img className='icon' alt='comment' src='https://cdn-icons-png.flaticon.com/512/5338/5338282.png'></img> {props.comment}</button>
                <button className='other'><img className='icon' alt='share' src='https://toppng.com/uploads/preview/share-png-file-share-icon-free-download-1156313309811bbndeiii.png'></img> {props.shares}</button>
            </div>
        </div>
    )
}

export default Answer