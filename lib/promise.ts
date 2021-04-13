// class: Promise()
// static: Promise.resolve() Promise.reject()
// instance: promise.then() promise.catch()
// status: pending, resolved, rejected
// result: value, reason
// callbacks: onFulfilledCallbacks onRejectedCallbacks

import { resolve } from 'dns';

enum PromiseStatus {
  PENDING = 0,
  RESOLVED = 1,
  REJECTED = 2,
}

type PromiseResolve = Function;
type PromiseReject = Function;
type PromiseValue = any;

interface Thenable<T> {
  then(): T;
}

class Promise {
  private _onFulfilled: Function = () => {};
  private _onRejected: Function = () => {};
  private _status: PromiseStatus = PromiseStatus.PENDING;

  constructor(fn: Function) {
    if (fn === this._noop) {
      return;
    }
    this._doResolve(fn);
  }

  public then(onFulfilled: PromiseResolve, onRejected: PromiseReject): Promise {
    typeof onFulfilled === 'function' && (this._onFulfilled = onFulfilled);
    typeof onRejected === 'function' && (this._onRejected = onRejected);
    return new Promise(this._noop);
  }

  private _noop() {}

  private _resolve() {
    if (this._status === PromiseStatus.PENDING) {
      this._status = PromiseStatus.RESOLVED;
      this._onFulfilled();
    }
  }

  private _reject() {
    if (this._status === PromiseStatus.PENDING) {
      this._status = PromiseStatus.RESOLVED;
      this._onRejected();
    }
  }

  private _doResolve(fn: Function) {
    try {
      fn(this._resolve, this._reject);
    } catch (e) {}
  }
}

export { Promise };
