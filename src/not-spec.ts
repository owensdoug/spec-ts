import { CompositeSpec } from "./composite-spec";
import { Spec } from "./spec";

export class NotSpec<T> extends CompositeSpec<T> {
  private _other: Spec<T>;

  constructor(other: Spec<T>) {
    super();
    this._other = other;
  }

  isSatisfiedBy(candidate: T): boolean {
    return !this._other.isSatisfiedBy(candidate);
  }

  toString(): string {
    return "(not " + this._other.toString() + ")";
  }
}
