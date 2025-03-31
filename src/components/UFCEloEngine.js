// src/components/UFCEloEngine.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './UFCEloEngine.css';
import backgroundImage from "../images/background.jpg"; // Import the background image

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function UFCEloEngine() {
  const [allFighterData, setAllFighterData] = useState({});
  const [topFighters, setTopFighters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFighterData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/fighterelo.json`);
        if (!response.ok) {
          throw new Error(`Failed to load fighter data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAllFighterData(data);

        const sortedFighters = Object.values(data)
          .sort((a, b) => b.elo - a.elo)
          .slice(0, 10);
        setTopFighters(sortedFighters);

        // Set the No. 1 fighter as the default search result
        setSearchResult(sortedFighters[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllFighterData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '' || allFighterData[searchTerm]) {
      setSuggestions([]);
      return;
    }
    setSuggestions(
      Object.keys(allFighterData)
        .filter(name => name.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .sort()
        .slice(0, 10)
    );
  }, [searchTerm, allFighterData]);

  const handleSearch = (fighterName = searchTerm) => {
    const fighter = allFighterData[fighterName];
    setSearchResult(fighter || null);
    setError(fighter ? null : `No data found for ${fighterName}`);
    setSuggestions([]);
    setSearchTerm(fighterName);
  };

  const eloChartData = searchResult
    ? {
        labels: searchResult.fights.map((_, index) => `Fight ${index + 1}`),
        datasets: [
          {
            label: 'Elo Rating Over Fights',
            data: searchResult.fights.map(fight => fight.eloAfterFight),
            borderColor: '#00bfff',
            backgroundColor: 'rgba(0, 191, 255, 0.2)',
            fill: true,
          },
        ],
      }
    : null;
    const pageStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", // Ensures the image covers the entire screen
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      minHeight: "100vh", // Ensures the background covers the full viewport height
      width: "100%", // Ensures the background covers the full width
    };
  return (
    <div style={pageStyle} className="retro-background">
      <div className="ufc-elo-engine">
        <div className="content-container">
          <div className="top-fighters">
            <h2>Top 10 Fighters by Elo</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
              {topFighters.map((fighter, index) => (
                <li key={fighter.name}>
                  <strong>{index + 1}. <a href="#" onClick={() => handleSearch(fighter.name)}>{fighter.name}</a></strong>
                  <span> - Elo: {fighter.elo.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="search-container">
            <h2>Search for a Fighter</h2>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-bar"
                placeholder="Enter fighter name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={() => handleSearch()} className="search-button">Search</button>
            </div>

            {suggestions.length > 0 && (
              <ul className="suggestions">
                {suggestions.map((name) => (
                  <li key={name} onClick={() => handleSearch(name)}>
                    {name}
                  </li>
                ))}
              </ul>
            )}

            {searchResult && (
              <div className="fighter-details">
                <h2>{searchResult.name}</h2>
                <p>Current Elo: {searchResult.elo.toFixed(2)}</p>

                {/* Elo Chart */}
                {eloChartData && (
                  <div className="elo-chart">
                    <Line data={eloChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                  </div>
                )}

                {/* Fight History */}
                <h3>Fight History</h3>
                <table className="fight-history">
                  <thead>
                    <tr>
                      <th>Opponent</th>
                      <th>Result</th>
                      <th>Finish Type</th>
                      <th>Round</th>
                      <th>Time</th>
                      <th>Event</th>
                      <th>Elo After Fight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult.fights
                      .slice()
                      .reverse()
                      .map((fight, index) => (
                        <tr key={index}>
                          <td>
                            <a href="#" onClick={() => handleSearch(fight.opponent)} className="opponent-link">
                              {fight.opponent}
                            </a>
                          </td>
                          <td>{fight.result}</td>
                          <td>{fight.finishType}</td>
                          <td>{fight.round}</td>
                          <td>{fight.time}</td>
                          <td>{fight.event}</td>
                          <td>{fight.eloAfterFight.toFixed(2)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UFCEloEngine;
