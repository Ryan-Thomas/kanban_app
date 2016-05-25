import React from 'react';

const Note = (props) => <div>{props.task}</div>;

Note.propTypes = { task: React.PropTypes.string.isRequired };

module.exports = Note;

// export default class Note extends React.component {
//   render() {
//     console.log(this.props.task);
//     return (
//       <div>{this.props.task}</div>
//     );
//   }
// }
