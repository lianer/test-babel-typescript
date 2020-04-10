class Promise {
  constructor(resolver: (arg0: (data: any) => void, arg1: (reason: any) => void) => void) {
    try {
      resolver(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  _resolve(data: any) {}

  _reject(reason: any) {}
}

export default Promise;
