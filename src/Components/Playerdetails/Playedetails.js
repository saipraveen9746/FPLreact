// src/components/DataDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Playersdetails.css';


const DataDisplay = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/player-details/')  
            .then(response => {
                setPlayers(response.data || []);  
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="player-list-container">
            <h1>Fantasy Premier League Players</h1>
            <ul className="player-list">
                {players.map(player => (
                    <li key={player.id} className="player-card">
                         
                        <div className='image-card'><img className='player-image' src={player.photo ? process.env.PUBLIC_URL + `/images/${player.photo}` : process.env.PUBLIC_URL + '/images/Photo-Missing.jpg'} alt={``}/></div>
                        <div className="player-details">
                            <p className="player-name">{player.first_name} {player.second_name}</p>
                            <p className="player-info">Team: {player.team_name}</p>
                             <p className="player-info">Position: {player.position}</p>
                            {/* <p className="player-info">Minutes: {player.minutes}</p> */}
                            <p className="player-info">Goals Scored: {player.goals_scored}</p>
                            <p className="player-info">Assists: {player.assists}</p>
                            <p className="player-info">Clean Sheets: {player.clean_sheets}</p>
                            {/* <p className="player-info">Saves: {player.saves}</p> */}
                            {/* <p className="player-info">Influence: {player.influence}</p> */}
                            <p className="player-info">Total points: {player.total_points}</p>
                            {/* <p className="player-info">Selected by percentage: {player.selected_by_percent}</p> */}
                            {/* Add more fields as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplay;
