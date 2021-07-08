import React, { useState } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Alert } from '@material-ui/lab'
import Container from '@material-ui/core/Container';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Note from './components/Note';
import Notes from './components/Notes';
import Users from './components/Users';
import Login from './components/Login';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'George Papagapitos'
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      important: false,
      user: 'George Papagapitos'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'George Papagapitos'
    }
  ]);

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const login = (user) => {
    setUser(user);
    setMessage(`welcome ${user}`);
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  };

  const match = useRouteMatch('/notes/:id');
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  return (
    <Container>

      <Navigation user={user} />

      {(message && <Alert severity="success">{message}</Alert>)}

      <Switch>
        <Route path="/notes/:id">
          <Note note={note} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} />
        </Route>
        <Route path="/users">
          {user ? <Users /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Container>
  );
};

export default App;