// Set up Cloud Functions for Firebase

const { createSapperAndApolloServer } = require("./__sapper__/build/server/server"); // eslint-disable-line import/no-unresolved

const appPromise = createSapperAndApolloServer();

exports.ssr = onRequest(async ( ...args ) => {
  const app = await appPromise;

  return app(...args);
});
