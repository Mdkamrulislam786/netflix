import React from 'react'
import './MyList.css'
import Row from '../Row'
import requests from "../../request";

const MyList = () => {
    return (
        <div className="mylist">
            <Row title="My List" fetchUrl={requests.fetchActionMovies} isLargeRow/>
            <Row  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        </div>
    )
}

export default MyList
