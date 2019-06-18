/**
 * Any class
 */
export type AnyConstructor<T> = Function & { prototype: T };

/**
 * Any non-abstract class
 */
export type Constructor<T> = {
  new (...args: any[]): T;
}

/**
 * Class with empty constructor
 */
export type EmptyConstructor<T> = {
  new (): T;
};

export const isEmptyConstructor = <T>(ctor: AnyConstructor<T>): ctor is EmptyConstructor<T> => {
  return ctor.length === 0;
}

export type ObjectLiteral = {
  [key: string]: any;
}

export type Maybe<T> = T | null | undefined;

export type MaybePromise<T> = T | Promise<T>;

export type MaybeArray<T> = T | Array<T>;
