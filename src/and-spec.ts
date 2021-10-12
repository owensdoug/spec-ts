import { CompositeSpec } from "./composite-spec";
import { Spec } from "./spec";

export class AndSpec<T> extends CompositeSpec<T> {
  private _left: Spec<T>;
  private _right: Spec<T>;

  constructor(left: Spec<T>, right: Spec<T>) {
    super();
    this._left = left;
    this._right = right;
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this._left.isSatisfiedBy(candidate) &&
      this._right.isSatisfiedBy(candidate)
    );
  }

  toString(): string {
    return "(" + this._left.toString() + " and " + this._right.toString() + ")";
  }
}
