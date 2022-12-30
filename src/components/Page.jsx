import React from 'react'
import Answer from './Answer'
import './Page.css'
import left from './left.png'
import top from './top.png'
import right from './right.png'


const Page = () => {
    const [answer, setAnswer] = React.useState(false)
    const [answer_text, setAnswerText] = React.useState("")
    const handleAnswer = () => {
        setAnswer(!answer)
    }
    const handleChange = () => {
        setAnswerText(answer_text)
    }

    return (
        <div>
            <img className='top' alt='top' src={top}></img>
            <div className='root-2'>
                <img className='left' alt='left' src={left}></img>
                <div className='main-div'>
                    <div className='question-div'>
                        <div className='question-heading'>
                            <h1 className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur vero sed tempore autem quas sit facere aliquam obcaecati fuga dolore, maxime incidunt.</h1>
                            <div className='question-container'>
                                <button className='answer-button' onClick={handleAnswer}>Answer</button>
                                <button className='answer-highlight'>100 Upvotes</button>
                                <button className='answer-highlight'>100 Informatics</button>
                            </div>
                        </div>
                    </div>
                    {answer === true && <div className='answer-div'>
                        <textarea onChange={handleChange} placeholder='Write your answer here' className='answer-text-input'></textarea>
                        <button className='post' >Post</button>


                    </div>}
                    <Answer authorn="Loren Schwitz" authorimg="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" upvotes="1000" comment="100" shares="4" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint." />
                    <Answer authorn="Loren Schwitz" authorimg="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" upvotes="120" comment="134" shares="12" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum quibusdam labore harum quam rem veniam expedita optio quo exercitationem recusandae corporis sint." />
                </div>
                <img className='right' alt='right' src={right}></img>
            </div>
        </div>

    )

}

export default Page