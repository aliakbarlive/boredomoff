import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import ImageLoad from '../hooks/ImageLoad'
import BlurryImage from '../../assets/blurry image small.jpg'
import OopsImage from '../../assets/oops.png'

function ActivityError() {

    return (
        <>
            <p className="activity-title">Activity not found!</p>
            <div className="card-wrapper">
                <div className="card">
                    <ImageLoad
                        src={OopsImage}
                        placeholder={BlurryImage}
                        alt="A cartoon vector of a yellow sticky note with the word oops scribbled in blue"
                        className="activity-image"
                    />
                    <div className="container">
                        <p className="description">This activity either does not exist or has a different ID </p>
                        <RouterLink to="/">
                            <button className="take-me-there">Return Back</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ActivityError