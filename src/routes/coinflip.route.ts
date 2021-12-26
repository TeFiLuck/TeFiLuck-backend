import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CoinflipController from '@controllers/coinflip.controller';

class CoinflipRoute implements Routes {
    public path = '/coinflip';
    public router = Router();
    public coinflipController = new CoinflipController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/config`, this.coinflipController.getConfig);
        this.router.get(`${this.path}/mybets/history`, this.coinflipController.getHistoricalBets);
        this.router.get(`${this.path}/mybets/:address`, this.coinflipController.getMyBets);
        this.router.post(`${this.path}/bets/pending`, this.coinflipController.getPendingBets);
        this.router.get(`${this.path}/bets/pending/:address/:id`, this.coinflipController.getPendingBetById);
        this.router.get(`${this.path}/bets/pending/count`, this.coinflipController.getPendingBetsCount);
        this.router.get(`${this.path}/bets/liquidatable`, this.coinflipController.getPublicLiquidatableBets);
    }
}

export default CoinflipRoute;