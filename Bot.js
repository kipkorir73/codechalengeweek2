import React from 'react';

const Bot = ({ bot, onEnlist, onRelease, onDischarge }) => {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  const handleRelease = () => {
    onRelease(bot);
  };

  const handleDischarge = () => {
    onDischarge(bot);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      {onEnlist && <button onClick={handleEnlist}>Enlist</button>}
      {onRelease && <button onClick={handleRelease}>Release</button>}
      {onDischarge && <button onClick={handleDischarge}>Discharge</button>}
    </div>
  );
};

export default Bot;
