import { Asset } from "./asset.response";

export interface OngoingBet {
    id: string;
    signature: string;
    owner: string;
    responder: string;
    responder_side: number;
    asset: Asset;
    started_at_block: number;
    blocks_until_liquidation: number;
    liquidation_block: number;
    responder_liquidation_blocks_gap: number;
    created_at: number;
}
