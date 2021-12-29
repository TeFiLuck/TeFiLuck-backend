import { Asset, AssetResponse } from "@/infrastructure/responses/coinflip/asset.response";
import { PendingBet } from "@/infrastructure/responses/coinflip/pendingBet.response";
import { WsMessageType, WsMessage } from "@websockets/interfaces/message.interface";

export class PlaceBetWsMessage implements WsMessage<PlaceBetData> {
    public type: WsMessageType = "place_bet_message";
    public data: PlaceBetData;

    constructor(wasmEvent: any) {
        this.data = new PlaceBetData(wasmEvent);
    }
}

export class PlaceBetData implements PendingBet {
    public owner: string;
    public id: string;
    public signature: string;
    public blocks_until_liquidation: number;
    public asset: Asset;
    public created_at: number;

    constructor(wasmEvent: any) {
        this.owner = wasmEvent.sender[0];
        this.id = wasmEvent.bet_id[0];
        this.signature = wasmEvent.signature[0];
        this.blocks_until_liquidation = Number(wasmEvent.blocks_until_liquidation[0]);
        this.asset = new AssetResponse(
            wasmEvent.denom[0],
            wasmEvent.amount[0],
        );
        this.created_at = Number(wasmEvent.created_at[0]);
    }
}