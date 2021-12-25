import { Asset } from "./asset.response";

export interface HistoricalBetsResponse {
    history: HistoricalBet[];
}

export interface HistoricalBet {
    id: string;
    bet_owner: string;
    bet_creator: string;
    winner: string;
    responder_side: string;
    amount: Asset;
    outcome: string;
    time: string;
}