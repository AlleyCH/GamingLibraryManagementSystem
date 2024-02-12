import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
//
// this component is used to show a single game
function ShowGame(props) {
  let navigate = useNavigate()
  let {id} = useParams();
  //
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "/api/api/games/" + id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      console.log('results from games',result.data);

      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const editGame = (id) => {
    navigate('/editgame/' + id);
    
  };

  const deleteGame = (id) => {
    setShowLoading(true);
    const article = { title: data.title, content: data.content };
    //
    axios.delete(apiUrl, article)
      .then((result) => {
        setShowLoading(false);
        navigate('/listgames')
      }).catch((error) => setShowLoading(false));
  };

  return (
    <div>
      {showLoading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> }    
        <h1>Title: {data.title}</h1>
        <p>Content: {data.content}</p>

        <p>
          <Button type="button" variant="primary" onClick={() => { editGame(data._id) }}>Edit</Button>&nbsp;
          <Button type="button" variant="danger" onClick={() => { deleteGame(data._id) }}>Delete</Button>
        </p>
    </div>
  );
}

export default ShowGame;
