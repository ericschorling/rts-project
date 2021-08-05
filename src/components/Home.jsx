import React from 'react'
import { Link } from 'react-router-dom'


export const Home = (props) =>{
    return (
        <>
            <h1>Home Page</h1>
            <div>
                Welcome to Hacker Search
            </div>
            <Link to="/search">
                <div className="homeSearchBtn">
                    Search
                </div>
            </Link>
        </>
    )
}