import React from 'react'
import './milind.png'
import './body.css'
export const Home = () => {
    return (
        <div className="home">
            <img src="./milind.png" alt="Photo" />
            <div className="description">
                <h1>Milind Vasantrao Waghmare</h1>
                <h3>Backend developer</h3>
                <p>Backend Developer with hands on Express, MongoDb, and other backend Skills</p>
            </div>
        </div>
    )
}
