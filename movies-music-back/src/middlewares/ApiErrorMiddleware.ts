import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from "routing-controllers";
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'class-validator';

@Middleware({type: "after"})
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, _req: Request, res: Response, next: (err?: NextFunction) => any) {
        const responseObject = {} as any;
        console.error(error);

        if (Array.isArray(error) && error.every((element) => element instanceof ValidationError)) {
            res.status(400);
            responseObject.message = "You have an error in your request's body. Check 'errors' field for more details!";
            responseObject.errors = error;
        } else {

            if (error instanceof Error) {
                const developmentMode: boolean = process.env.NODE_ENV === "development";

                if (error.name && (developmentMode || error.message)) {
                    responseObject.name = error.name;
                }
                if (error.message) {
                    responseObject.message = error.message;
                }
                if (error.stack && developmentMode) {
                    responseObject.stack = error.stack;
                }
            } else if (typeof error === "string") {
                responseObject.message = error;
            }
        }

        res.status(200).json(responseObject);
        next();
    }

}
