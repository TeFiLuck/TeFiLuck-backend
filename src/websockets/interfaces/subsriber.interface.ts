import { MessageBroadcaster } from '@websockets/interfaces/broadcaster.interface'

export interface MessageSubscriber {
    broadcaster: MessageBroadcaster;
    subscribeEvent(): void;
}