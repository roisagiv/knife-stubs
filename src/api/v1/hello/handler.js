module.exports.handler = function handler(event, context) {
  return context.succeed({
    message: `Hello, ${event.name}`,
  });
};
