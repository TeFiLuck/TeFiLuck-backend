import { NextFunction, Request, Response } from 'express';
import coinFlipService from '@services/coinflip.service';
import { logger } from '@/utils/logger';
import { PendingBetsFilterDto } from '@/dto/coinflip/pendingBetsFilter.dto';

class CoinflipController {
    private coinFlipService = new coinFlipService();

    public getConfig = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const config = await this.coinFlipService.getContractConfig();
            res.status(200).json(config);
        } catch (error) {
            next(error);
        }
    }

    public getMyBets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const address = String(req.params.address);

            const myBets = await this.coinFlipService.getMyBets(address);
            res.status(200).json(myBets);
        } catch (error) {
            next(error);
        }
    }

    public getPendingBets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const filter: PendingBetsFilterDto = req.body;

            const pendingBets = await this.coinFlipService.getPendingBets(filter);
            res.status(200).json(pendingBets);
        } catch (error) {
            next(error);
        }
    }

    public getPendingBetsCount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const pendingBetsCount = await this.coinFlipService.getPendingBetsCount();

            res.status(200).json(pendingBetsCount);
        } catch (error) {
            next(error);
        }
    }

    public getPublicLiquidatableBets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const skip = Number(req.query.skip);
            const limit = Number(req.query.limit);

            const bets = await this.coinFlipService.getPublicLiquidatableBets(skip, limit);
            res.status(200).json(bets);
        } catch (error) {
            next(error);
        }
    }

    public getHistoricalBets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const skip = Number(req.query.skip);
            const limit = Number(req.query.limit);
            const address = String(req.query.address);

            const bets = await this.coinFlipService.getHistoricalBets(skip, limit, address);
            res.status(200).json(bets);
        } catch (error) {
            next(error);
        }
    }
}

export default CoinflipController;