import React from 'react';
import classes from './PlayerName.css';

const PlayerName = props => {
    return(
        <div className={classes.PlayerName} id="name-0">{props.playerName}
        </div>
    );
}
export default PlayerName;