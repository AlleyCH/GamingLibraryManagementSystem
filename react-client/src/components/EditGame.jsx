import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
// this component is used to edit an article
function EditGame(props) {
  //
  let navigate = useNavigate();
  // Get the userId param from the URL.
  let { id } = useParams();
  console.log(id)
  //
  const [game, setGame] = useState({ _id: '', title: '', 
  description: '' });  
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "/api/api/games/" + id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setGame(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const updateGame = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { title: game.title, description: game.description};
    //mimicks very much REST calls
    axios.put(apiUrl, data)
      .then((result) => {
        console.log('after calling put to update',result.data )
        setShowLoading(false);
        navigate('/showgame/' + result.data._id)
      }).catch((error) => setShowLoading(false));
  };
  //runs when user enters a field
  const onChange = (e) => {
    e.persist();
    setGame({...game, [e.target.name]: e.target.value});
  }

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
        <Form onSubmit={updateGame}>
          <Form.Group>
            <Form.Label> Title</Form.Label>
            <Form.Control type="text" name="title" id="title" placeholder="Enter game title" value={game.title} onChange={onChange} />
            </Form.Group>
          <Form.Group>
            <Form.Label> Last Name</Form.Label>
            <Form.Control type="text" name="description" id="description" placeholder="Enter game description" value={game.content} onChange={onChange} />
          </Form.Group>
          
          
        
          <Button variant="primary" type="submit">
            Update Game
          </Button>
        </Form>
    </div>
  );
}
//
export default EditGame;
