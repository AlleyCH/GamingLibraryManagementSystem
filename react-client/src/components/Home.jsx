
import React, { Component }  from 'react';
import './home.css'
//
// this is the home page component
function Home(props)
{
    return (
        <div>
            <h2>WELCOME TO ARCADE ALCOVE</h2>
            <iframe frameborder="0" src="https://itch.io/embed/1781275?dark=true" width="552" height="167"><a href="https://alleyc.itch.io/alphaprojectz">ProjectZ by DinoBois</a></iframe>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Home;