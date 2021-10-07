import { CompositeSpec } from "./composite-spec";

export class RangeSpec<T> extends CompositeSpec<T> {
  private a: T;
  private b: T;

  constructor(a: T, b: T) {
    super();
    this.a = a;
    this.b = b;
  }

  isSatisfiedBy(candidate: T): boolean {
    return candidate >= this.a && candidate <= this.b;
  }

  toString(): string {
    return "range (" + this.a + ", " + this.b + ")";
  }
}
