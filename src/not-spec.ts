import { CompositeSpec } from "./composite-spec";
import { Spec } from "./spec";

export class NotSpec<T> extends CompositeSpec<T> {
  private other: Spec<T>;

  constructor(other: Spec<T>) {
    super();
    this.other = other;
  }

  isSatisfiedBy(candidate: T): boolean {
    return !this.other.isSatisfiedBy(candidate);
  }

  toString(): string {
    return "(not " + this.other.toString() + ")";
  }
}
