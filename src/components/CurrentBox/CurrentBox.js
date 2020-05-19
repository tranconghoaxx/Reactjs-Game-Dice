import React from 'react';
import classes from './CurrentBox.css';
const CurrentBox = props => {
    return (
        <div className={classes.PlayerCurrentBox}>
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-0">{props.currentScore}</div>
        </div>
    );
}
export default CurrentBox;