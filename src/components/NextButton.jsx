import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NextButton(props) {
    const [underline, setUnderline] = useState("");
  const handleMouseEnter = () => {
    setUnderline("underline");
  };

  const handleMouseLeave = () => {
    setUnderline("");
  };
  return (
    <Link to={props.URI} className="arrowDiv">
          <p
            className={`flex  ${underline} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {props.Content}
            <img
              src="arrowWhite.png"
              alt="arrow"
              width="30px"
              className="arrow"
            />
          </p>
        </Link>
  )
}

export default NextButton