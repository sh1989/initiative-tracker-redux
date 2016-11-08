import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from '../data/classes';
import races from '../data/races';

const renderStatInput = (field) =>
  <input type="number" min="0" max="20" {...field.input} />

const AddPlayer = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <label>Name:</label>
        <Field type="text" component="input" name="name" />
      </div>
      <div className="row">
        <label>HP:</label>
        <Field type="number" component="input" name="hp" />
      </div>
      <table>
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Field component={renderStatInput} name="strength" /></td>
            <td><Field component={renderStatInput} name="dexterity" /></td>
            <td><Field component={renderStatInput} name="constitution" /></td>
            <td><Field component={renderStatInput} name="intelligence" /></td>
            <td><Field component={renderStatInput} name="wisdom" /></td>
            <td><Field component={renderStatInput} name="charisma" /></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <label>Level:</label>
        <Field component={renderStatInput} name="level" />
      </div>
      <div className="row">
        <label>Class:</label>
        <Field component="select" name="class">
          <option value="">Select...</option>
          { classes.map(c => <option value={c} key={c}>{c}</option>) }
        </Field>
      </div>
      <div className="row">
        <label>Race:</label>
        <Field component="select" name="race">
          <option value="">Select...</option>
          { races.map(r => <option value={r} key={r}>{r}</option>) }
        </Field>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

const AddPlayerForm = reduxForm({
  form: 'addPlayer',
  initialValues: {
    'name': '',
    'hp': 1,
    'strength': 10,
    'dexterity': 10,
    'constitution': 10,
    'intelligence': 10,
    'wisdom': 10,
    'charisma': 10,
    'level': 1
  }
})(AddPlayer);

export default AddPlayerForm;
