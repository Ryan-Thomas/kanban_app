import React from 'react';
import Note from './Note.jsx';

const Notes = ({ notes, onEdit }) =>
  <ul>{notes.map(note =>
    <li key={note.id}>
      <Note
        task={note.task}
        onEdit={onEdit.bind(null, note.id)}
      />
    </li>
  )}</ul>;

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onEdit: React.PropTypes.func.isRequired,
};

module.exports = Notes;
