export interface Spec<T> {
  isSatisfiedBy(candidate: T): boolean;
  and(other: Spec<T>): Spec<T>;
  andNot(other: Spec<T>): Spec<T>;
  or(other: Spec<T>): Spec<T>;
  orNot(other: Spec<T>): Spec<T>;
  not(): Spec<T>;
}
