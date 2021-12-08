import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class RespondBetWsMessage implements WsMessage<RespondBetData> {
    public type: WsMessageType = "respond_bet_message";
    public data: RespondBetData;

    constructor(wasmEvent: any) {
        this.data = new RespondBetData(
            wasmEvent.sender[0],
            wasmEvent.bet_id[0],
        );
    }
}

export class RespondBetData {
    public sender: string;
    public betId: string;

    constructor(sender: string, betId: string) {
        this.sender = sender;
        this.betId = betId;
    }
}