import { NextFunction, Request, Response } from 'express';

class BetsController {
    public getPending = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            res.status(200).json({ message: 'okay' });
        } catch (error) {
            next(error);
        }
    };
}

export default BetsController;