import { WebSocketServer } from 'ws';
import { TendermintSubscriptionResponse } from '@terra-money/terra.js';
import { WsMessage } from '@websockets/interfaces/message.interface';

export interface MessageBroadcaster {
    server: WebSocketServer;
    handleCallback<T>(data: WsMessage<T>): void;
}
