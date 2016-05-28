import React from 'react';
import EncountersList from './encountersList';
import PlayersList from './playersList';

const Home = (props) => {
  return (
    <div id="contents">
      <PlayersList
        players={props.players.entrySeq()}
        onAddPlayer={props.onAddPlayer} />
      <EncountersList
        encounters={props.encounters.entrySeq()}
        onAddEncounter={props.onAddEncounter}
        onStartEncounter={props.onStartEncounter} />
    </div>
  );
}

export default Home;