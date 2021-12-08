import config from 'config';
import express from 'express';
import { WebSocketServer } from 'ws';
import TerraWsBlocksListener from '@websockets/terra/blocks.terra';
import Broadcaster from '@websockets/server/broadcaster.ws';
import { logger } from '@/utils/logger';
import TerraWsCoinflipContractListener from './terra/coinflip.terra';

/**
 * initializeWs
 */
function initializeWebSockets(app: express.Application | any, expressWss: any) {
    app.ws('/websocket', function(ws, req) {
        logger.info("new ws subscription received");
    });

    const server: WebSocketServer = expressWss.getWss('/websocket');
    const terraWsUrl: string = config.get('terraWsUrl');

    const broadcaster = new Broadcaster(server);
    
    new TerraWsBlocksListener(terraWsUrl, broadcaster).subscribeEvent();
    new TerraWsCoinflipContractListener(terraWsUrl, broadcaster).subscribeEvent();
}

export default initializeWebSockets;