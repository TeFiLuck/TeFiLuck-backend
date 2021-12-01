import { WsMessage } from "@websockets/interfaces/message.interface";

export class BlockWsMessage implements WsMessage<Block> {
    public type: string = "block_message";
    public data: Block;

    constructor(height: number | string) {
        this.data = new Block(height);
    }
}

export class Block {
    public height: number | string;
    constructor(height: number | string) {
        this.height = height;
    }
}