import React from 'react';
import classes from './PlayerPanel.css';
import PlayerName from '../PlayerName/PlayerName';
import PlayerScore from '../PlayerScore/PlayerScore';
import CurrentBox from '../CurrentBox/CurrentBox';

const PlayerPanel = props => {
    return (
        <div className={classes.PlayerPanel}>
            <PlayerName playerName={props.playerName}/>
            <PlayerScore score="0" />
            <CurrentBox/>
        </div>
    );
};
export default PlayerPanel;