import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';

const App = () => {
  const [allBots, setAllBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('http://localhost:8001/bots');
      const data = await response.json();
      setAllBots(data);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const handleEnlist = (bot) => {
    if (!army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const handleDischarge = async (bot) => {
    try {
      if (army.filter((b) => b.bot_class === bot.bot_class).length > 1) {
        // Remove the bot from the army if there are more than one bot of this class
        const updatedArmy = army.filter((b) => b.id !== bot.id);
        setArmy(updatedArmy);
      } else {
        // Discharge the bot from the backend if there is only one bot of this class
        await fetch(`http://localhost:8001/bots/${bot.id}`, {
          method: 'DELETE',
        });

        const updatedArmy = army.filter((b) => b.id !== bot.id);
        setArmy(updatedArmy);
      }
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  const filteredBots = allBots.filter(
    (bot) => filters.length === 0 || filters.includes(bot.bot_class)
  );

  const sortedBots = sortType
    ? [...filteredBots].sort((a, b) => b[sortType] - a[sortType])
    : filteredBots;

    return (
      <div>
        <h1>The Blues Bot Army</h1>
        <SortBar
          sortType={sortType}
          onSortTypeChange={handleSortTypeChange}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <div className="container">
          <div className="your-bot-army">
            
            <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
          </div>
          <div className="bot-collection">
            
            <BotCollection bots={sortedBots} onEnlist={handleEnlist} />
          </div>
        </div>
      </div>
    );
  };
  
  export default App;