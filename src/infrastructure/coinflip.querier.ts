import config from 'config';
import { LCDClient } from '@terra-money/terra.js';
import { lcdInstance } from '@utils/lcd';
import { ConfigResponse } from './responses/coinflip/config.response';
import { AddressPendingBets } from './responses/coinflip/addressPendingBets.response';
import { OngoingBet } from './responses/coinflip/ongoingBet.response';
import { PendingBet } from './responses/coinflip/pendingBet.response';

class CoinflipContractQuerier {
    private terra: LCDClient = lcdInstance();
    private contract: string = config.get('p2pcoinflipContract');

    public async queryConfig(): Promise<ConfigResponse> {
        return await this.terra.wasm.contractQuery<ConfigResponse>(
            this.contract,
            {
                config: {},
            }
        );
    }

    public async queryAddressPendingBets(address: string): Promise<AddressPendingBets> {
        return await this.terra.wasm.contractQuery<AddressPendingBets>(
            this.contract,
            {
                pending_bets_by_addr: {
                    address: address,
                }
            },
        );
    }

    public async queryAddressOngoingBets(address: string): Promise<OngoingBet[]> {
        return await this.terra.wasm.contractQuery<OngoingBet[]>(
            this.contract,
            {
                ongoing_bets_by_addr: {
                    address: address,
                }
            }
        );
    }

    public async queryPendingBets(skip: number, limit: number): Promise<PendingBet[]> {
        return await this.terra.wasm.contractQuery<PendingBet[]>(
            this.contract,
            {
                pending_bets: {
                    skip: skip,
                    limit: limit,
                }
            }
        )
    }
}

export default CoinflipContractQuerier;