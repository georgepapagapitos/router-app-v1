import React from 'react';

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>Posted by {note.user}</div>
      <div><strong>{note.important ? 'important' : ''}</strong></div>
    </div>
  );
};

export default Note;