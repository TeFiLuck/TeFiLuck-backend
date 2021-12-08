import config from 'config';
import { LCDClient, TxInfo } from '@terra-money/terra.js';
import { lcdInstance } from '@utils/lcd';

class TerraTxQuerier {
    private terra: LCDClient = lcdInstance();

    public async queryTxInfo(txHash: string): Promise<TxInfo> {
        return await this.terra.tx.txInfo(txHash);
    }
}

export default TerraTxQuerier;