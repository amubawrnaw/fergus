const requireEvent = (event) => require(`../events/${event}`);

module.exports = (client) => {
  client.on('disconnect', () => requireEvent('disconnect')(client));
  client.on('guildMemberAdd', requireEvent('guildMemberAdd'));
  client.on('guildMemberRemove', requireEvent('guildMemberRemove'));
  client.on('message', requireEvent('message').message);
  client.on('ready', () => requireEvent('ready')(client));
  client.on('reconnecting', () => requireEvent('reconnecting')(client));
  process.on('unhandledRejection', (error) => requireEvent('unhandledRejection')(error));
};
