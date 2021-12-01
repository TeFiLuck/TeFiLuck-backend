import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import BetsController from '@controllers/bets.controller';

class BetsRoute implements Routes {
    public path = '/bets';
    public router = Router();
    public betsController = new BetsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/pending`, this.betsController.getPending);
    }
}

export default BetsRoute;