import { CompositeSpec } from "./composite-specification";
import { Specification } from "./specification";

export class NotSpecification<T> extends CompositeSpec<T> {
  private _other: Specification<T>;

  constructor(other: Specification<T>) {
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
