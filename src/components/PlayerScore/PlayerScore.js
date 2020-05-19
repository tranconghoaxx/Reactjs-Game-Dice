import React from 'react';
import classes from './PlayerScore.css';
const PlayerScore = props => {
    return (
        <div className={classes.PlayerScore} id="score-0">
        {props.score}
        </div>
    )
}
export default PlayerScore;