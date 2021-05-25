import React from 'react'
import Toggle from './Toggle'
import Fade from 'react-reveal/Fade';

export default function Title() {
    return (
        <>
        <Fade top>
            <h1 className="title">
                 BOREDOMOFF
            </h1>   
        </Fade>
     
            <Toggle />
        </>
    )
}