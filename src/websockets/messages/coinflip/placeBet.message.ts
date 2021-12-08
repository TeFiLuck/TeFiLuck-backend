import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class PlaceBetWsMessage implements WsMessage<PlaceBetData> {
    public type: WsMessageType = "place_bet_message";
    public data: PlaceBetData;

    constructor(wasmEvent: any) {
        this.data = new PlaceBetData(
            wasmEvent.sender[0],
            wasmEvent.bet_id[0],
        );
    }
}

export class PlaceBetData {
    public sender: string;
    public betId: string;

    constructor(sender: string, betId: string) {
        this.sender = sender;
        this.betId = betId;
    }
}