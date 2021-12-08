import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class WithdrawPendingBetWsMessage implements WsMessage<WithdrawPendingBetData> {
    public type: WsMessageType = "withdraw_pending_bet_message";
    public data: WithdrawPendingBetData;

    constructor(wasmEvent: any) {
        this.data = new WithdrawPendingBetData(
            wasmEvent.bet_id[0],
        );
    }
}

export class WithdrawPendingBetData {
    public betId: string;

    constructor(betId: string) {
        this.betId = betId;
    }
}