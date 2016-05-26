import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    // Track 'editing' state.
    this.state = {
      editing: false,
    };
  }
  finishEdit = (e) => {
    // 'Note' will trigger an optional 'onEdit' callback once it
    // has a new avalue. We will use this to communicate the change to
    // 'App'.
    //
    // A starter way to deal with the default value would be to set
    // it through 'defaultProps'.
    //
    // See the *Typing with React* chapter for more information
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);

      // Exit the edit mode.
      this.setState({
        editing: false,
      });
    }
  };
  checkEnter = (e) => {
    // If the user hits enter, the note is completed
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  edit = () => this.setState({
    editing: true,
  });
  renderNote = () => {
    return (
      <div onClick={this.edit}>{this.props.task}</div>
    );
  }
  renderEdit = () => {
    // We deal with blur and input handlers here. These map to DOM events.
    // We also set selection to input end using a callback at a ref.
    // It gets triggered after the component is mounted.
    //
    // We could also use a string reference (i.e., 'ref="input') and
    // then refer to the element in question later in the code through
    // 'this.refs.input'. We could get the value of the input using
    // 'this.refs.input.value' through DOM in this case.
    //
    // Refs allow us to access the underlying DOM structure. They
    // can be useful when you need to move beyond pure React. They
    // also tie your implementation to the browser, though.
    return (
      <input
        type="text"
        /* eslint-disable */
        ref={
          element => element ?
          element.selectionStart = this.props.task.length :
          null
        }
        /* eslint-enable */
        autoFocus
        defaultValue={this.props.task}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }
}
Note.propTypes = {
  task: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.bool.isRequired,
};

module.exports = Note;

// export default class Note extends React.component {
//   render() {
//     console.log(this.props.task);
//     return (
//       <div>{this.props.task}</div>
//     );
//   }
// }
