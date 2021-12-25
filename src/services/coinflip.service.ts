import { MyBetsResponse } from '@/dto/coinflip/myBetsResponse.dto';
import { PendingBetsFilterDto } from '@/dto/coinflip/pendingBetsFilter.dto';
import { PendingBetsResponse } from '@/dto/coinflip/pendingBetsResponse.dto';
import CoinflipContractQuerier from '@/infrastructure/coinflip.querier';
import { ConfigResponse } from '@/infrastructure/responses/coinflip/config.response';
import { HistoricalBetsResponse } from '@/infrastructure/responses/coinflip/historicalBets.response';
import { OngoingBet } from '@/infrastructure/responses/coinflip/ongoingBet.response';
import { PendingBet } from '@/infrastructure/responses/coinflip/pendingBet.response';
import { PendingBetsCount } from '@/infrastructure/responses/coinflip/pendingBetsCount.response';

class CoinflipService {
    private querier = new CoinflipContractQuerier();

    public async getContractConfig(): Promise<ConfigResponse> {
        return await this.querier.queryConfig();
    }

    public async getMyBets(address: string): Promise<MyBetsResponse> {
        const pending = await this.querier.queryAddressPendingBets(address);
        const ongoing = await this.querier.queryAddressOngoingBets(address);

        return new MyBetsResponse(pending.bets, ongoing);
    }

    public async getPendingBets(filter: PendingBetsFilterDto): Promise<PendingBetsResponse> {
        const pendingBets = await this.querier.queryPendingBets(filter);
        return new PendingBetsResponse(pendingBets);
    }

    public async getPendingBetsCount(): Promise<PendingBetsCount> {
        return await this.querier.queryPendingBetsCount();
    }

    public async getPublicLiquidatableBets(skip: number, limit: number): Promise<OngoingBet[]> {
        return await this.querier.queryPublicLiquidatableBets(skip, limit);
    }

    public async getHistoricalBets(skip: number, limit: number, address: string): Promise<any> {
        return await this.querier.queryHistoricalBets(skip, limit, address);
    }
}

export default CoinflipService;