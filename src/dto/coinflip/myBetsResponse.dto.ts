import { OngoingBet } from "@/infrastructure/responses/coinflip/ongoingBet.response";
import { PendingBet } from "@/infrastructure/responses/coinflip/pendingBet.response";

export class MyBetsResponse {
    public pending: PendingBet[];
    public ongoing: OngoingBet[];

    constructor(pending: PendingBet[], ongoing: OngoingBet[]) {
        this.pending = pending;
        this.ongoing = ongoing;
    }
}
