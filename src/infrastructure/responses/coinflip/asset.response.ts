export interface Asset {
    denom: string;
    amount: string;
}

export class AssetResponse implements Asset {
    public denom: string;
    public amount: string;

    constructor(denom: string, amount: string) {
        this.denom = denom;
        this.amount = amount;
    }
}