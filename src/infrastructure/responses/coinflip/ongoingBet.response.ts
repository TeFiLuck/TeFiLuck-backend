import { Asset } from "./asset.response";

export interface OngoingBet {
    betId: string;
    betCreator: string;
    betResponder: string;
    responderSide: string;
    asset: Asset;
    blocksUntilLiquidation: number;
    liquidationBlock: number;
    responderLiquidationBlocksGap: number;
}
