import { Asset, AssetResponse } from "@/infrastructure/responses/coinflip/asset.response";
import { HistoricalBet } from "@/infrastructure/responses/coinflip/historicalBets.response";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class ResolveBetWsMessage implements WsMessage<HistoricalBetData> {
    public type: WsMessageType = "resolve_bet_message";
    public data: HistoricalBetData;

    constructor(wasmEvent: any) {
        this.data = new HistoricalBetData(wasmEvent);
    }
}

export class HistoricalBetData implements HistoricalBet {
    public id: string;
    public owner: string;
    public responder: string;
    public winner: string;
    public responder_side: number;
    public amount: Asset;
    public outcome: string;
    public created_at: number;

    constructor(wasmEvent: any) {
        this.id = wasmEvent.bet_id[0];
        this.owner = wasmEvent.owner[0];
        this.responder = wasmEvent.responder[0];
        this.winner = wasmEvent.winner[0];
        this.responder_side = Number(wasmEvent.responder_side[0]);
        this.amount = new AssetResponse(
            wasmEvent.denom[0],
            wasmEvent.amount[0],
        );
        this.outcome = wasmEvent.outcome[0];
        this.created_at = Number(wasmEvent.created_at[0]);
    }
}