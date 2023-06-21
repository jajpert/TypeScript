import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        return next();
    }

    const extratectErrors: object[] = [];
    // primeiro err tem q ser err.param perguntar pro Diego pq esta dando errado
    errors.array().map((err) => {
        if (err.type === 'field') {
            extratectErrors.push({[err.path]: err.msg});
        }
    });

    return res.status(422).json({
        errors: extratectErrors,
    });
}