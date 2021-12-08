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
        this.router.get(`${this.path}/mybets/:address`, this.coinflipController.getMyBets);
        this.router.get(`${this.path}/bets/pending`, this.coinflipController.getPendingBets);
    }
}

export default CoinflipRoute;