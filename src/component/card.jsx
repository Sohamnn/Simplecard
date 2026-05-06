import React from 'react'
// import {Bookmark} from 'lucide-react-native'
const Card = (props) => {
  
  return (
  <>
    
      <div className="card">
        <div className="head">
          <img src={props.brandLogo} alt="" />
          <button>Save </button>
        </div>
        <div className="title">
        <h4>{props.company}<span>{props.datePosted}</span></h4>
        <h2>{props.post}</h2>
        <div className="role">
          <button id="cardp">{props.tag1}</button>
          <button id="cardp">{props.tag2}</button>
        </div>
        </div>
        <div className="foot">
          <h3>{props.pay}<br /><span id='footspan'>{props.location}</span></h3>
          <button>Apply Now</button>
        </div>
      </div>
    
  </>
  )
}

export default Card