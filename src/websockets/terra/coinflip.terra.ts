import config from 'config';
import { EventsByType, TendermintQuery, WebSocketClient } from '@terra-money/terra.js';
import { MessageSubscriber } from '@websockets/interfaces/subsriber.interface';
import { MessageBroadcaster } from '@websockets/interfaces/broadcaster.interface';
import TerraTxQuerier from '@/infrastructure/tx.querier';
import { PlaceBetWsMessage } from '../messages/coinflip/placeBet.message';
import { RespondBetWsMessage } from '../messages/coinflip/respondBet.message';
import { ResolveBetWsMessage } from '../messages/coinflip/resolveBet.message';
import { LiquidateBetWsMessage } from '../messages/coinflip/liquidateBet.message';
import { WithdrawPendingBetWsMessage } from '../messages/coinflip/withdrawPendingBet.message';

class TerraWsCoinflipContractListener implements MessageSubscriber {
    public broadcaster: MessageBroadcaster;
    public wsClient: WebSocketClient;

    private txQuerier = new TerraTxQuerier();

    constructor(terraWsUrl: string, broadcaster: MessageBroadcaster) {
        this.wsClient = new WebSocketClient(terraWsUrl, -1, 1000);
        this.broadcaster = broadcaster;
    }

    public subscribeEvent(): void {
        const contract: string = config.get('p2pcoinflipContract');
        const subscribeContractEventsMsg: TendermintQuery = {
            "message.action": "/terra.wasm.v1beta1.MsgExecuteContract",
            "execute_contract.contract_address": ["CONTAINS", contract],
        };

        this.wsClient.subscribeTx(subscribeContractEventsMsg, async data => {
            await new Promise(resolve => setTimeout(resolve, 2000)); // sleep until tx info could be fetched

            const txInfo = await this.txQuerier.queryTxInfo(data.value.TxResult.txhash);
            const msg = this.resolveMessageType(txInfo.logs[0].eventsByType);
            this.broadcaster.handleCallback(msg);
        });

        this.wsClient.start();
    }

    private resolveMessageType(txEvents: EventsByType): any {
        switch (txEvents.wasm.action[0]) {
            case 'place_bet':
                return new PlaceBetWsMessage(txEvents.wasm);
            case 'respond_bet':
                return new RespondBetWsMessage(txEvents.wasm);
            case 'resolve_bet':
                return new ResolveBetWsMessage(txEvents.wasm);
            case 'liquidate_bet':
                return new LiquidateBetWsMessage(txEvents.wasm);
            case 'withdraw_pending_bet':
                return new WithdrawPendingBetWsMessage(txEvents.wasm);
        }
    }
}

export default TerraWsCoinflipContractListener;