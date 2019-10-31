import { observable, computed, action } from 'mobx';

export class UiState {
  _anObservableProp = false;

  @observable
  _userName?: string;

  @observable someFlag = false;
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
}
