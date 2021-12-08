import { WebSocketClient } from '@terra-money/terra.js';
import { MessageSubscriber } from '@websockets/interfaces/subsriber.interface';
import { MessageBroadcaster } from '@websockets/interfaces/broadcaster.interface';
import { BlockWsMessage } from '@websockets/messages/blocks.message';

class TerraWsBlocksListener implements MessageSubscriber {
    public broadcaster: MessageBroadcaster;
    public wsClient: WebSocketClient;

    constructor(terraWsUrl: string, broadcaster: MessageBroadcaster) {
        this.wsClient = new WebSocketClient(terraWsUrl);
        this.broadcaster = broadcaster;
    }

    public subscribeEvent(): void {
        this.wsClient.subscribe("NewBlockHeader", {}, (data) => {
            let msg = new BlockWsMessage(data.value["header"]["height"]);
            this.broadcaster.handleCallback(msg);
        });

        this.wsClient.start();
    }
}

export default TerraWsBlocksListener;