import { MyBetsResponse } from '@/dto/coinflip/myBetsResponse.dto';
import { PendingBetsResponse } from '@/dto/coinflip/pendingBetsResponse.dto';
import CoinflipContractQuerier from '@/infrastructure/coinflip.querier';
import { ConfigResponse } from '@/infrastructure/responses/coinflip/config.response';
import { PendingBet } from '@/infrastructure/responses/coinflip/pendingBet.response';

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

    public async getPendingBets(skip: number, limit: number): Promise<PendingBetsResponse> {
        const pendingBets = await this.querier.queryPendingBets(skip, limit);

        return new PendingBetsResponse(pendingBets);
    }
}

export default CoinflipService;