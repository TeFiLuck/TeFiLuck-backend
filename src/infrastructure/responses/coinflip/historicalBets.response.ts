import { Asset } from "./asset.response";

export interface HistoricalBetsResponse {
    history: HistoricalBet[];
}

export interface HistoricalBet {
    id: string;
    owner: string;
    bet_responder: string;
    winner: string;
    responder_side: number;
    amount: Asset;
    outcome: string;
    time: number;
}