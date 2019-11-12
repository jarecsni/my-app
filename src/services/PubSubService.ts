import PubSub from 'pubsub-js';

// example for a function - interface
export interface PubSubReceiver {
  (topic: string, data: any): void;
}

export abstract class PubSubService {
  topic: string;
  receivers: Map<PubSubReceiver, string> = new Map();
  constructor(topicName: string) {
    this.topic = topicName;
  }
  subscribe(receiver: PubSubReceiver) {
    const token = PubSub.subscribe(this.topic, (topic: string, data: any) => {
      receiver(topic, data);
    });
    this.receivers.set(receiver, token);
  }
  unsubscribe(receiver: PubSubReceiver) {
    const token = this.receivers.get(receiver);
    if (token) {
      PubSub.unsubscribe(token);
    }
  }
  publish(data: any, subTopic?: string) {
    const topic = subTopic ? this.topic + '.' + subTopic : this.topic;
    PubSub.publish(topic, data);
  }
}
