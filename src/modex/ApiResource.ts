import axios from 'axios';

export enum State {
    Stale,
    Synced,
    Syncing,
    Error,
}

export class ApiResource {
    _url: string;
    _data: any;
    _state = State.Stale;
    constructor(url: string) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    get data() {
        return this._data;
    }
    async sync(): void {
        try {
            this._state = State.Syncing;
            const response = await axios.get(this.url);
            this._state = State.Synced;
            this._data = response.data;
        } catch (error) {
            this._state = State.Error;
        }
    }
    get state() {
        return this._state;
    }
}
