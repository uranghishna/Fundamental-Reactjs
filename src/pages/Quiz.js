import React, {useState} from 'react'
import { quiz } from '../components/quiz/FakeData'

const Quiz = () => {
    const {id, question, options} = quiz[1];


    return (
        <div className="container">
            <h1 className="text-center my-3">Happy Quiz</h1>
            <div className="card">
                <div className="card-header">{question}</div>
                <div className="card-body">
                    {options.map(item => (
                        <div
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                        }}>
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
            <div className="d-flex justify-content-between py-3">
                <button className="btn btn-secondary col-sm-2">Previous</button>
                <button className="btn btn-primary col-sm-2">Next</button>
            </div>
        </div>
    )
}

export default Quiz
