import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [allBots, setAllBots] = useState([]);
  const [army, setArmy] = useState([]);

  
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
  
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const handleDischarge = async (bot) => {
    
    try {
      await fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE',
      });

      
      const updatedArmy = army.filter((b) => b.id !== bot.id);
      setArmy(updatedArmy);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Army</h1>
      <div className="bot-collection">
        <h2>All Bots</h2>
        <BotCollection bots={allBots} enlistBot={handleEnlist} />
      </div>
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <YourBotArmy army={army} releaseBot={handleRelease} dischargeBot={handleDischarge} />
      </div>
    </div>
  );
};

export default App;
