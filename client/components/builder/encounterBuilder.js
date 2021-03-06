import React from 'react';
import AddEnemyForm from './addEnemy';
import Bestiary from './bestiary';
import Row from '../common/row';

const EnemyListItem = (props) => {
  const description = `${props.enemy.size} ${props.enemy.monsterType} - ${props.enemy.hp} HP`;
  return (
    <li>
      <div>
        <span>{props.enemy.name}</span>
        <button className="delete-enemy" onClick={() => props.onDelete(props.enemyId)}></button>
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>Enters on round {props.enemy.startingRound}</span>
      </div>
    </li>
  );
};

const EncounterBuilder = (props) => {
  return (
    <div className="encounter-builder">
      <div className="builder">
      <button className="back" onClick={props.onBack} />
        <Row>
          <label>Name: </label>
          <input type="text" value={props.name} onChange={props.onSetEncounterName} />
        </Row>
        <h2>Enemies</h2>
        <ul>
          { props.enemies.map(e =>
              <EnemyListItem key={e[0]} enemyId={e[0]} enemy={e[1]} onDelete={props.onDeleteEnemy} />
            )
          }
        </ul>
        <button
          disabled={props.name === ''}
          className="start"
          onClick={() => props.onDone()}>Done</button>
      </div>
      <div className="builder-right">
        <AddEnemyForm
          monsters={props.monsters}
          onSubmit={props.onAddEnemy}
          onChangeEnemy={props.onChangeEnemy} />
        <Bestiary monster={props.selectedMonster} />
      </div>
    </div>
  );
};

export default EncounterBuilder;
