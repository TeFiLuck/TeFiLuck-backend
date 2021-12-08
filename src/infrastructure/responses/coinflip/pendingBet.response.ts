import { Asset } from "./asset.response";

export interface PendingBet {
    id: string;
    signature: string;
    blocksUntilLiquidation: number;
    asset: Asset;
}
