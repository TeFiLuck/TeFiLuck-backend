export type WsMessageType = 
    | "block_message"
    | "place_bet_message"
    | "respond_bet_message"
    | "resolve_bet_message"
    | "liquidate_bet_message"
    | "withdraw_pending_bet_message";

export interface WsMessage<T> {
    type: WsMessageType;
    data: T;
}