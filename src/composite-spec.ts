import { Spec } from "./spec";
import { NotSpec } from "./not-spec";
import { OrNotSpec } from "./or-not-spec";
import { OrSpec } from "./or-spec";
import { AndNotSpec } from "./and-not-spec";
import { AndSpec } from "./and-spec";

export abstract class CompositeSpec<T> implements Spec<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: Spec<T>): Spec<T> {
    return new AndSpec<T>(this, other);
  }

  andNot(other: Spec<T>): Spec<T> {
    return new AndNotSpec<T>(this, other);
  }

  or(other: Spec<T>): Spec<T> {
    return new OrSpec<T>(this, other);
  }

  orNot(other: Spec<T>): Spec<T> {
    return new OrNotSpec<T>(this, other);
  }

  not(): Spec<T> {
    return new NotSpec<T>(this);
  }
}
