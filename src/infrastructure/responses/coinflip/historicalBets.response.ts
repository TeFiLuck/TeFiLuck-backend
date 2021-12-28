import { Asset } from "./asset.response";

export interface HistoricalBetsResponse {
    history: HistoricalBet[];
}

export interface HistoricalBet {
    id: string;
    owner: string;
    responder: string;
    winner: string;
    responderSide: number;
    amount: Asset;
    outcome: string;
    time: number;
}