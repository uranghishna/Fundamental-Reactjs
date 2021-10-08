import React, {useState} from 'react'
import { quiz } from '../components/quiz/FakeData'

const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {id, question, options} = quiz[currentIndex];

    const nextQuestion = () =>{
        if(quiz.length - 1 === currentIndex) return;
        setCurrentIndex(currentIndex + 1)
    }

    const previousQuestion = () =>{
        if(currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1)
    }
    

    return (
        <div className="container">
            <h1 className="text-center my-3">Happy Quiz</h1>
            <div className="card" style={{ backgroundColor: 'grey' }}>
                <div className="card-body" style={{
                    display: 'flex',
                    padding: 10,
                    flexWrap: 'wrap',
                }}>
                    {quiz.map((item, index) => (
                        <div className="border border-black" style={{
                        height: 35,
                        width: 35,
                        display: 'flex',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        alignItems: 'center',
                        margin: 5,
                        borderRadius: 5,
                        cursor: 'pointer',
                        backgroundColor: index === currentIndex ? "greenyellow" : "white"
                        }}
                        onClick={() => setCurrentIndex(index)}
                        >
                        {index + 1}
                    </div>
                    ))}
                </div>
            </div>
            <div className="card">
                <div className="card-header">{currentIndex +1}. {question}</div>
                <div className="card-body">
                    {options.map((item, index) => (
                        <div
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                        key={index}
                        >
                            <div
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                backgroundColor: 'grey',
                                cursor: 'pointer',
                                marginRight: 5,
                            }}>
                            </div>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-between pt-3">
                <button className="btn btn-secondary col-sm-2" onClick={() => previousQuestion()} disabled={currentIndex === 0 ? true : false}>Previous</button>
                <button className="btn btn-primary col-sm-2" onClick={() => nextQuestion()} disabled={quiz.length - 1 === currentIndex ? true : false}>Next</button>
            </div>
        </div>
    )
}

export default Quiz
