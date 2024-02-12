import CreateGame from './CreateGame';
import ListGames from './ListGames';

import React, { useState } from 'react';
//
import axios from 'axios';
//
function View (props) {
  // read the info from props, coming from the ancestor component
  const { screen, setScreen } = props;
  // return a stateful value and funcion to update it
  const [data, setData] = useState();
  //
  const [gameOperation, setGameOperation] = useState('no-op');
  // called when user clicks on Logout button
  // to clear the cookie and set the screen state variable 
  // back to its initial state.
  const deleteCookie = async () => {
    try {
      await axios.get('/api/signout');
      setScreen('auth');
    } catch (e) {
      console.log(e);
    }
  };
  // called when user clicks on Verify Cookie button
  // end-point demonstrates another example for the use
  // of cookie specific response from the server.
  const verifyCookie = async () => {
    try {
      const res = await axios.get('/api/welcome');
      console.log(res.data)
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  //
  const listGames = (username) => {

    console.log('in listGames: ',username)

  }
  //
  const createGame = () => {
    console.log('in createGame')

  }
  //
  return (
    <div className="App">
      {
        (() => {
          switch (gameOperation) {
            case 'list':
              return <ListGames />
            case 'create':
              return <CreateGame screen={screen} setScreen={setScreen} />
            
            default:
              return <div>
              <p>{screen}</p>
              <p>{data}</p>
              <button onClick={verifyCookie}>Verify Cookie</button>
            {/* <button onClick={() => setGameOperation('create')}>Create Game</button>*/}
              
              <button onClick={() => setGameOperation('list')}>List Games</button>
  
              <button onClick={deleteCookie}>Log out</button>
            </div> 
          }
        })()
                   
      }

    </div>
  );
}
//
export default View;