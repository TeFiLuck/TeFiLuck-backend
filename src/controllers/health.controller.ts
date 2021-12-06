import { NextFunction, Request, Response } from 'express';

class HealthController {
    public isHealthy = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    };
}

export default HealthController;