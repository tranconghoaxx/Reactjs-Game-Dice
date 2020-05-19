import React from 'react';
import PlayerPanel from './components/PlayerPanel/PlayerPanel';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import image from './assets/images/dice-5.png';
import classes from './App.css';
function App() {
  return (
    <div className={[classes.Wrapper,classes.ClearFix].join(' ')}>
      <PlayerPanel playerName="Player 1" score="0" currentScore="0"/>
      <PlayerPanel playerName="Player 2" />
      <Button nameBtn="New game" BtnType={classes.BtnNew} iconType="ion-ios-plus-outline"/>
      <Button nameBtn="Roll dice" BtnType={classes.BtnRoll} iconType="ion-ios-loop" />
      <Button nameBtn="Hold" BtnType={classes.BtnHold} iconType="ion-ios-download-outline" />
      <Input />
       <img src={image} alt="Dice" className={classes.Dice} id="dice-1"/>
    </div>
  );
}

export default App;
