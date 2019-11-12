import { observable, computed, action } from 'mobx';
import { timeService } from '../services/TimeService';

export class UiState {
  _anObservableProp = false;
  @observable _userName?: string;
  @observable _time: number = 0;
  @observable someFlag = false;

  constructor() {
    timeService.subscribe(this.onTimeChange.bind(this));
  }

  @action setSomeFlag(value: boolean) {
    this.someFlag = value;
  }

  @computed get anObservableProp() {
    return this._anObservableProp;
  }
  @action setAnObservableProp(value: boolean) {
    this._anObservableProp = value;
  }

  @computed get userName() {
    return this._userName;
  }
  @action setUserName(name: string) {
    this._userName = name;
  }
  @action
  onTimeChange(topic: string, data: any) {
    this._time = data;
  }
  @computed get time(): number {
    return this._time;
  }
}
