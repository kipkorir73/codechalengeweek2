import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

const BotCollection = ({ bots, onEnlist }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={onEnlist} onGoBack={handleGoBack} />
      ) : (
        <div>
          <h2>Bot Collection</h2>
          {bots.map((bot) => (
            <div key={bot.id} onClick={() => handleBotClick(bot)} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BotCollection;
