import { WebSocketServer } from 'ws';
import { TendermintSubscriptionResponse } from '@terra-money/terra.js';
import { MessageBroadcaster } from "@websockets/interfaces/broadcaster.interface";
import { logger } from '@/utils/logger';
import { WsMessage } from '@websockets/interfaces/message.interface';

class Broadcaster implements MessageBroadcaster {
    public server: WebSocketServer;

    constructor(server: WebSocketServer) {
        this.server = server;
    }

    public handleCallback<T>(message: WsMessage<T>): void {
        this.server.clients.forEach(client => {
            client.send(JSON.stringify(message));
        });
    }
}

export default Broadcaster;
