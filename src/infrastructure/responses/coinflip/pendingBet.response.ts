import { Asset } from "./asset.response";

export interface PendingBet {
    owner: string;
    id: string;
    signature: string;
    blocks_until_liquidation: number;
    asset: Asset;
    created_at: number;
}
