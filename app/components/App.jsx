import React from 'react';
import Notes from './Notes.jsx';
import NoteStore from '../stores/NoteStore.js';
import NoteActions from '../actions/NoteActions.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = NoteStore.getState();
  }
  componentWillMount() {
    NoteStore.unlisten(this.storeChanged);
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  storeChanged = (state) => {
    // Without a property initializer `this` wouldn't
    // point at the right context because it defaults to
    // `undefined` in strict mode.
    this.setState(state);
  };
  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();
    NoteActions.delete(id);
  };
  addNote = () => {
    NoteActions.create({ task: 'New Task' });
  }
  editNote = (id, task) => {
    // Don't modify if trying to set an empty value
    if (!task.trim()) {
      return;
    }

    NoteActions.update({ id, task });
  };
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }
}
