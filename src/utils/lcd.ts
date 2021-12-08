import config from 'config';
import { LCDClient } from '@terra-money/terra.js';

export const lcdInstance = (): LCDClient => {
    const lcdUrl: string = config.get('terraLcdUrl');
    const chainId: string = config.get('terraChainId');

    return new LCDClient({
        URL: lcdUrl,
        chainID: chainId,
    });
}