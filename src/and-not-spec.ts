import { AndSpec } from "./and-spec";

export class AndNotSpec<T> extends AndSpec<T> {
  isSatisfiedBy(candidate: T): boolean {
    return super.isSatisfiedBy(candidate) !== true;
  }

  toString(): string {
    return "not " + super.toString();
  }
}
