import React from 'react';
import Note from './Note.jsx';

const Notes = ({ notes }) =>
  <ul>{notes.map(note =>
    <li key={note.id}>
      <Note task={note.task} />
    </li>
  )}</ul>;

Notes.propTypes = { notes: React.PropTypes.array.isRequired };

module.exports = Notes;
