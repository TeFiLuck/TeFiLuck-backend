import config from 'config';
import { LCDClient } from '@terra-money/terra.js';
import { lcdInstance } from '@utils/lcd';
import { ConfigResponse } from './responses/coinflip/config.response';
import { AddressPendingBets } from './responses/coinflip/addressPendingBets.response';
import { OngoingBet } from './responses/coinflip/ongoingBet.response';
import { PendingBet } from './responses/coinflip/pendingBet.response';
import { PendingBetsCount } from './responses/coinflip/pendingBetsCount.response';
import { PendingBetsFilterDto } from '@/dto/coinflip/pendingBetsFilter.dto';
import { HistoricalBetsResponse } from './responses/coinflip/historicalBets.response';
import { add } from 'winston';

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

    public async queryPendingBets(filter: PendingBetsFilterDto): Promise<PendingBet[]> {
        return await this.terra.wasm.contractQuery<PendingBet[]>(
            this.contract,
            {
                pending_bets: {
                    filter: {
                        skip: filter.skip,
                        limit: filter.limit,
                        exclude_address: filter.exclude_address,
                        assets: filter.assets,
                        liquidation: filter.liquidation,
                        sort_by: filter.sort_by,
                    }
                }
            }
        );
    }

    public async queryPendingBetsCount(): Promise<PendingBetsCount> {
        return await this.terra.wasm.contractQuery<PendingBetsCount>(
            this.contract,
            {
                pending_bets_count: {},
            }
        );
    }

    public async queryOngoingBetById(bet_id: string): Promise<OngoingBet> {
        return await this.terra.wasm.contractQuery<OngoingBet>(
            this.contract,
            {
                ongoing_bet: {
                    bet_id: bet_id,
                }
            }
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

    public async queryPublicLiquidatableBets(skip: number, limit: number): Promise<OngoingBet[]> {
        return await this.terra.wasm.contractQuery<OngoingBet[]>(
            this.contract,
            {
                public_liquidatable: {
                    skip: skip,
                    limit: limit,
                }
            }
        );
    }

    public async queryHistoricalBets(skip: number, limit: number, address: string): Promise<any> {
        return await this.terra.wasm.contractQuery<any>(
            this.contract,
            {
                historical_bets: {
                    skip: skip,
                    limit: limit,
                    address: address,
                }
            }
        );
    }
}

export default CoinflipContractQuerier;