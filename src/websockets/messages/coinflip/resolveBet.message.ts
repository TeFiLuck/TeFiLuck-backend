import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class ResolveBetWsMessage implements WsMessage<ResolveBetData> {
    public type: WsMessageType = "resolve_bet_message";
    public data: ResolveBetData;

    constructor(wasmEvent: any) {
        this.data = new ResolveBetData(
            wasmEvent.bet_id[0],
        );
    }
}

export class ResolveBetData {
    public betId: string;

    constructor(betId: string) {
        this.betId = betId;
    }
}