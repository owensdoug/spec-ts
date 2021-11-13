import { Specification } from "./specification";
import { NotSpecification } from "./not-specification";
import { OrNotSpecification } from "./or-not-specification";
import { OrSpecification } from "./or-specification";
import { AndNotSpecification } from "./and-not-specification";
import { AndSpecification } from "./and-specification";

export abstract class CompositeSpec<T> implements Specification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification<T>(this, other);
  }

  andNot(other: Specification<T>): Specification<T> {
    return new AndNotSpecification<T>(this, other);
  }

  or(other: Specification<T>): Specification<T> {
    return new OrSpecification<T>(this, other);
  }

  orNot(other: Specification<T>): Specification<T> {
    return new OrNotSpecification<T>(this, other);
  }

  not(): Specification<T> {
    return new NotSpecification<T>(this);
  }
}
