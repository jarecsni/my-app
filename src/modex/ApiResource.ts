import axios from 'axios';

export class ApiResource {
  _url: string;
  _data: any;
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
      const response = await axios.get(this.url);
      this._data = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
