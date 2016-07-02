import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import encounters from './encounters';
import monsters from './monsters';
import players from './players';

export default combineReducers({
  encounters,
  monsters,
  players,
  form: formReducer.plugin({
    addEnemy: (state, action) => {
      switch(action.type) {
        case 'ADD_ENEMY':
          return undefined;
        default:
          return state;
      }
    },
    addPlayer: (state, action) => {
      switch(action.type) {
        case 'ADD_PLAYER':
          return undefined;
        default: return state;
      }
    },
    turnDamage: (state, action) => state,
    turnHealing: (state, action) => state,
    deathSaves: (state, action) => {
      switch(action.type) {
        case 'redux-form/CHANGE':
          if (action.field === 'save' && action.value) {
            return Object.assign({}, state, { fail: {} });
          } else if (action.field === 'fail' && action.value) {
            return Object.assign({}, state, { save: {} });
          }
          else {
            return state;
          }
        case 'DEATH_SAVE':
          return undefined;
        default:
          return state;
      }
    }
  }),
  routing: routerReducer
});
