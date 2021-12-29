import { TxInfo } from "@terra-money/terra.js";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";
import { HistoricalBetData } from "./resolveBet.message";

export class LiquidateBetWsMessage implements WsMessage<HistoricalBetData> {
    public type: WsMessageType = "liquidate_bet_message";
    public data: HistoricalBetData;

    constructor(wasmEvent: any) {
        this.data = new HistoricalBetData(wasmEvent);
    }
}
