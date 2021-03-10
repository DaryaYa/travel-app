import React from 'react';
import CSS from 'csstype';
// ICONS
import { BsStarFill, BsStarHalf,  BsStar } from 'react-icons/bs';

const iconStyles: CSS.Properties = {
  color: '#f8e825',
}

type RatingProps = {
  value: number,
  text: string,
}

const Rating: React.FC<RatingProps> = ({ value, text }) => {
  return (
    <div>
      <span>
        {value >= 1
          ? <BsStarFill style={iconStyles}/>
          : value >= 0.5
          ? <BsStarHalf style={iconStyles} />
          : <BsStar style={iconStyles} />
        }
      </span>
      <span>
        {value >= 2
          ? <BsStarFill style={iconStyles} />
          : value >= 1.5
          ? <BsStarHalf style={iconStyles} />
          : <BsStar style={iconStyles} />
        }
      </span>
      <span>
        {value >= 3
          ? <BsStarFill style={iconStyles} />
          : value >= 2.5
          ? <BsStarHalf style={iconStyles} />
          : <BsStar style={iconStyles} />
        }
      </span>
      <span>
        {value >= 4
          ? <BsStarFill style={iconStyles} />
          : value >= 3.5
          ? <BsStarHalf style={iconStyles} />
          : <BsStar style={iconStyles} />
        }
      </span>
      <span>
        {value >= 5
          ? <BsStarFill style={iconStyles} />
          : value >= 4.5
          ? <BsStarHalf style={iconStyles} />
          : <BsStar style={iconStyles} />
        }
      </span>
      <span>{text && text}</span>
    </div>
  )
}


export default Rating
