export interface WsMessage<T> {
    type: string;
    data: T;
}