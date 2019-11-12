import { PubSubService } from './PubSubService';

class TimeService extends PubSubService {
  constructor() {
    super('time');
    setInterval(() => {
      super.publish(new Date().getTime());
    }, 100);
  }
}

export const timeService = new TimeService();
