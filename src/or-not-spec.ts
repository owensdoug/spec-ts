import { OrSpec } from "./or-spec";

export class OrNotSpec<T> extends OrSpec<T> {
  isSatisfiedBy(candidate: T): boolean {
    return super.isSatisfiedBy(candidate) !== true;
  }

  toString(): string {
    return "not " + super.toString();
  }
}
