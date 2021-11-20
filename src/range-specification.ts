import { CompositeSpecification } from "./composite-specification";

export class RangeSpecification<T> extends CompositeSpecification<T> {
  private _a: T;
  private _b: T;

  constructor(a: T, b: T) {
    super();
    this._a = a;
    this._b = b;
  }

  isSatisfiedBy(candidate: T): boolean {
    return candidate >= this._a && candidate <= this._b;
  }

  toString(): string {
    return "range (" + this._a + ", " + this._b + ")";
  }
}
