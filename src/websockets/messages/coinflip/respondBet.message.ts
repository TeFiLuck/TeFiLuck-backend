import { Asset, AssetResponse } from "@/infrastructure/responses/coinflip/asset.response";
import { OngoingBet } from "@/infrastructure/responses/coinflip/ongoingBet.response";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class RespondBetWsMessage implements WsMessage<RespondBetData> {
    public type: WsMessageType = "respond_bet_message";
    public data: RespondBetData;

    constructor(wasmEvent: any) {
        this.data = new RespondBetData(wasmEvent);
    }
}

export class RespondBetData implements OngoingBet {
    public id: string;
    public signature: string;
    public owner: string;
    public responder: string;
    public responder_side: number;
    public asset: Asset;
    public started_at_block: number;
    public blocks_until_liquidation: number;
    public liquidation_block: number;
    public responder_liquidation_blocks_gap: number;
    public created_at: number;

    constructor(wasmEvent: any) {
        this.id = wasmEvent.bet_id[0];
        this.signature = wasmEvent.signature[0];
        this.owner = wasmEvent.bet_creator[0];
        this.responder = wasmEvent.bet_responder[0];
        this.responder_side = Number(wasmEvent.responder_side[0]);
        this.asset = new AssetResponse(
            wasmEvent.denom[0],
            wasmEvent.amount[0],
        );
        this.started_at_block = Number(wasmEvent.started_at_block[0]);
        this.blocks_until_liquidation = Number(wasmEvent.blocks_until_liquidation[0]);
        this.liquidation_block = Number(wasmEvent.liquidation_block[0]);
        this.responder_liquidation_blocks_gap = Number(wasmEvent.responder_liquidation_blocks_gap[0]);
        this.created_at = Number(wasmEvent.created_at[0]);
    }
}