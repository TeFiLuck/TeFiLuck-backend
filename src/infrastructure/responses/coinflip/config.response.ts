import { CoinLimit } from "./coinLimit.response";

export interface ConfigResponse {
    owner: string;
    treasury: string;
    treasuryTaxPercent: number;
    maxBetsByAddr: number;
    minBetAmounts: CoinLimit[];
    minBlocksUntilLiquidation: number;
    maxBlocksUntilLiquidation: number;
    blocksForResponderLiquidation: number;
    betResponderLiquidationPercent: number;
    betLiquidatorPercent: number;
    treasuryLiquidationPercent: number;
    historicalBetsMaxStorageSize: number;
    historicalBetsClearBatchSize: number;
}