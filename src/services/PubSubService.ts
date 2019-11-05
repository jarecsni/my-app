import PubSub from 'pubsub-js';

interface PubSubReceiver {
  onMessage(data: any): void;
}

export class PubSubService {}
