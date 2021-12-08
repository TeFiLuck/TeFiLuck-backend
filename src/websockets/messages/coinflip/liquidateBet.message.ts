import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class LiquidateBetWsMessage implements WsMessage<LiquidateBetData> {
    public type: WsMessageType = "liquidate_bet_message";
    public data: LiquidateBetData;

    constructor(wasmEvent: any) {
        this.data = new LiquidateBetData(
            wasmEvent.bet_id[0],
        );
    }
}

export class LiquidateBetData {
    public betId: string;

    constructor(betId: string) {
        this.betId = betId;
    }
}