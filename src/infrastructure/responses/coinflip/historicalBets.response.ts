import { Asset } from "./asset.response";

export interface HistoricalBetsResponse {
    history: HistoricalBet[];
}

export interface HistoricalBet {
    id: string;
    owner: string;
    responder: string;
    winner: string;
    liquidator: string | null;
    responder_side: number;
    amount: Asset;
    outcome: string;
    created_at: number;
}