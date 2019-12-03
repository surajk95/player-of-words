import React from 'react';

export default function Score(props) {
    return (
        <div className="scoreContainer">
            Score:
            <span className="score">
                {props.score}
            </span>
        </div>
    )
}