// Manages incoming requests and directs them to the appropriate controller actions
const users = require('../controllers/users.server.controller');
const games = require('../controllers/games.server.controller');
//
module.exports = function (app) {
        app.route('/api/games')
            .get(users.requiresLogin, games.list)
            .post(users.requiresLogin, games.create);
        //
        app.route('/api/games/:gameId')
            .get(users.requiresLogin,games.read)
            .put(users.requiresLogin, games.hasAuthorization, games.
                update)
            .delete(users.requiresLogin, games.hasAuthorization, games.
                delete);
        //
        app.param('gameId', games.gameByID);

        
};
