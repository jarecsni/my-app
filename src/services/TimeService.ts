import { PubSubService } from './PubSubService';

class TimeService extends PubSubService {}

export const timeService = new TimeService();
