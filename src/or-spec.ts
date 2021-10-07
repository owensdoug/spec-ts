import { CompositeSpec } from "./composite-spec";
import { Spec } from "./spec";

export class OrSpec<T> extends CompositeSpec<T> {
  private left: Spec<T>;
  private right: Spec<T>;

  constructor(left: Spec<T>, right: Spec<T>) {
    super();
    this.left = left;
    this.right = right;
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate)
    );
  }

  toString(): string {
    return "(" + this.left.toString() + " or " + this.right.toString() + ")";
  }
}
