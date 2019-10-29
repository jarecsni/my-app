import { observable, action } from 'mobx';

export class UiState {
  _anObservableProp = false;

  @observable someFlag = false;
  @action setSomeFlag(value: boolean) {
    this.someFlag = value;
  }

  @observable get anObservableProp() {
    return this._anObservableProp;
  }

  @action setAnObservableProp(value: boolean) {
    this._anObservableProp = value;
  }
}
