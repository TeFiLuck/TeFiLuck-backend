import { PendingBet } from "@/infrastructure/responses/coinflip/pendingBet.response";

export class PendingBetsResponse {
    public bets: PendingBet[];
    public count: number;

    constructor(bets: PendingBet[]) {
        this.bets = bets;
        this.count = bets.length;
    }
}