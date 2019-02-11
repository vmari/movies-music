import { Action, createExpressServer, useContainer } from "routing-controllers";
import { createConnection, getManager } from 'typeorm';
import 'reflect-metadata';
import * as jwt from 'jwt-simple';
import { Container } from "typedi";
import { config } from './config';
import { User } from './entity/User';

useContainer(Container);

export const app = createExpressServer({
    authorizationChecker: async (action: Action, roles: string[]) => {
        const token = action.request.headers["authorization"];
        const payload = jwt.decode(token, config.jwtSecret);
        const user = await getManager().getRepository(User).findOne(payload.id);
        return (user !== null);
    },
    currentUserChecker: async (action: Action) => {
        const token = action.request.headers["authorization"];
        let payload = jwt.decode(token, config.jwtSecret);
        return getManager().getRepository(User).findOne(payload.id);
    },
    cors: true,
    defaults: {
        nullResultCode: 200,
        undefinedResultCode: 200,
    },
    defaultErrorHandler: false,
    routePrefix: "/api",
    controllers: [__dirname + "/controllers/*.ts"],
    middlewares: [__dirname + "/middlewares/*.ts"]
});

createConnection().then(async (connection) => {

    await connection.synchronize();

    app.emit('appReady');

    // Prevent server start if tests are running
    if (require.main === module) {
        app.listen(config.port);
        console.log(`Server running on port ${config.port}`);
    }

}).catch(error => console.log('TypeORM connection error: ', error));
