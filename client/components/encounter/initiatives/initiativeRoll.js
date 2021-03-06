import React from 'react';
import Box from '../../common/box';

const initiativeRoll = (props) => {
  return (
    <Box>
      <h2>Roll for Initiative!</h2>
      <table>
        <thead>
          <tr>
            <th>Combatant</th>
            <th>Bonus</th>
            <th>Roll</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.combatants.map(c =>
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.bonus}</td>
              <td><input type="number" min="0" max="20" onChange={(e) => props.onSetInitiative(c.id, e.target.value)} /></td>
              <td>{c.bonus + c.initiative}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="builderOptions">
        <button className="start" onClick={props.onBeginCombat}>Start</button>
      </div>
    </Box>
  );
};

export default initiativeRoll;
