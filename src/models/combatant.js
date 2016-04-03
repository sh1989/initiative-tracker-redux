import immutable from 'immutable';

const _Combatant = {
  name: '',
  type: '',
  hp: 0,
  initiativeBonus: 0,
  deathSaves: 0,
  deathFails: 0,
  conditions: []
};

export default class Combatant extends immutable.Record(_Combatant) {

}