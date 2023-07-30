import React from 'react';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <button onClick={() => onRelease(bot)} className="release-button">
            Release
          </button>
          <button onClick={() => onDischarge(bot)} className="discharge-button">
            Discharge
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
