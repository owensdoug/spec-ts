import { CompositeSpecification } from "./composite-specification";
import { Specification } from "./specification";

export class AndSpecification<T> extends CompositeSpecification<T> {
  private _left: Specification<T>;
  private _right: Specification<T>;

  constructor(left: Specification<T>, right: Specification<T>) {
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
