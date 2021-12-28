import { Asset } from "./asset.response";

export interface OngoingBet {
    id: string;
    owner: string;
    responder: string;
    responderSide: number;
    asset: Asset;
    blocksUntilLiquidation: number;
    liquidationBlock: number;
    responderLiquidationBlocksGap: number;
    created_at: number;
}
