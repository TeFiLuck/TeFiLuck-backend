import { WebSocketClient } from '@terra-money/terra.js';
import { MessageBroadcaster } from '@websockets/interfaces/broadcaster.interface'

export interface MessageSubscriber {
    broadcaster: MessageBroadcaster;
    wsClient: WebSocketClient;
    subscribeEvent(): void;
}