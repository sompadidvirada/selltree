
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employye
 * 
 */
export type Employye = $Result.DefaultSelection<Prisma.$EmployyePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerBill
 * 
 */
export type CustomerBill = $Result.DefaultSelection<Prisma.$CustomerBillPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Categorys
 * 
 */
export type Categorys = $Result.DefaultSelection<Prisma.$CategorysPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employyes
 * const employyes = await prisma.employye.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employyes
   * const employyes = await prisma.employye.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employye`: Exposes CRUD operations for the **Employye** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employyes
    * const employyes = await prisma.employye.findMany()
    * ```
    */
  get employye(): Prisma.EmployyeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerBill`: Exposes CRUD operations for the **CustomerBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerBills
    * const customerBills = await prisma.customerBill.findMany()
    * ```
    */
  get customerBill(): Prisma.CustomerBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorys`: Exposes CRUD operations for the **Categorys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorys
    * const categorys = await prisma.categorys.findMany()
    * ```
    */
  get categorys(): Prisma.CategorysDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employye: 'Employye',
    Customer: 'Customer',
    CustomerBill: 'CustomerBill',
    Products: 'Products',
    Categorys: 'Categorys'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employye" | "customer" | "customerBill" | "products" | "categorys"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employye: {
        payload: Prisma.$EmployyePayload<ExtArgs>
        fields: Prisma.EmployyeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployyeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployyeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          findFirst: {
            args: Prisma.EmployyeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployyeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          findMany: {
            args: Prisma.EmployyeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>[]
          }
          create: {
            args: Prisma.EmployyeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          createMany: {
            args: Prisma.EmployyeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployyeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          update: {
            args: Prisma.EmployyeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          deleteMany: {
            args: Prisma.EmployyeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployyeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployyeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployyePayload>
          }
          aggregate: {
            args: Prisma.EmployyeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployye>
          }
          groupBy: {
            args: Prisma.EmployyeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployyeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployyeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployyeCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerBill: {
        payload: Prisma.$CustomerBillPayload<ExtArgs>
        fields: Prisma.CustomerBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          findFirst: {
            args: Prisma.CustomerBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          findMany: {
            args: Prisma.CustomerBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>[]
          }
          create: {
            args: Prisma.CustomerBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          createMany: {
            args: Prisma.CustomerBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          update: {
            args: Prisma.CustomerBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          deleteMany: {
            args: Prisma.CustomerBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerBillPayload>
          }
          aggregate: {
            args: Prisma.CustomerBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerBill>
          }
          groupBy: {
            args: Prisma.CustomerBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerBillCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerBillCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Categorys: {
        payload: Prisma.$CategorysPayload<ExtArgs>
        fields: Prisma.CategorysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          findFirst: {
            args: Prisma.CategorysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          findMany: {
            args: Prisma.CategorysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>[]
          }
          create: {
            args: Prisma.CategorysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          createMany: {
            args: Prisma.CategorysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategorysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          update: {
            args: Prisma.CategorysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          deleteMany: {
            args: Prisma.CategorysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategorysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          aggregate: {
            args: Prisma.CategorysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorys>
          }
          groupBy: {
            args: Prisma.CategorysGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorysGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorysCountArgs<ExtArgs>
            result: $Utils.Optional<CategorysCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employye?: EmployyeOmit
    customer?: CustomerOmit
    customerBill?: CustomerBillOmit
    products?: ProductsOmit
    categorys?: CategorysOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bill: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | CustomerCountOutputTypeCountBillArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerBillWhereInput
  }


  /**
   * Count Type CategorysCountOutputType
   */

  export type CategorysCountOutputType = {
    products: number
  }

  export type CategorysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategorysCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorysCountOutputType
     */
    select?: CategorysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employye
   */

  export type AggregateEmployye = {
    _count: EmployyeCountAggregateOutputType | null
    _avg: EmployyeAvgAggregateOutputType | null
    _sum: EmployyeSumAggregateOutputType | null
    _min: EmployyeMinAggregateOutputType | null
    _max: EmployyeMaxAggregateOutputType | null
  }

  export type EmployyeAvgAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type EmployyeSumAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type EmployyeMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    phonenumber: string | null
    position: string | null
    image: string | null
    point: number | null
    createAt: Date | null
    status: boolean | null
  }

  export type EmployyeMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    phonenumber: string | null
    position: string | null
    image: string | null
    point: number | null
    createAt: Date | null
    status: boolean | null
  }

  export type EmployyeCountAggregateOutputType = {
    id: number
    username: number
    password: number
    phonenumber: number
    position: number
    image: number
    point: number
    createAt: number
    status: number
    _all: number
  }


  export type EmployyeAvgAggregateInputType = {
    id?: true
    point?: true
  }

  export type EmployyeSumAggregateInputType = {
    id?: true
    point?: true
  }

  export type EmployyeMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phonenumber?: true
    position?: true
    image?: true
    point?: true
    createAt?: true
    status?: true
  }

  export type EmployyeMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phonenumber?: true
    position?: true
    image?: true
    point?: true
    createAt?: true
    status?: true
  }

  export type EmployyeCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phonenumber?: true
    position?: true
    image?: true
    point?: true
    createAt?: true
    status?: true
    _all?: true
  }

  export type EmployyeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employye to aggregate.
     */
    where?: EmployyeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employyes to fetch.
     */
    orderBy?: EmployyeOrderByWithRelationInput | EmployyeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployyeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employyes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employyes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employyes
    **/
    _count?: true | EmployyeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployyeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployyeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployyeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployyeMaxAggregateInputType
  }

  export type GetEmployyeAggregateType<T extends EmployyeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployye[P]>
      : GetScalarType<T[P], AggregateEmployye[P]>
  }




  export type EmployyeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployyeWhereInput
    orderBy?: EmployyeOrderByWithAggregationInput | EmployyeOrderByWithAggregationInput[]
    by: EmployyeScalarFieldEnum[] | EmployyeScalarFieldEnum
    having?: EmployyeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployyeCountAggregateInputType | true
    _avg?: EmployyeAvgAggregateInputType
    _sum?: EmployyeSumAggregateInputType
    _min?: EmployyeMinAggregateInputType
    _max?: EmployyeMaxAggregateInputType
  }

  export type EmployyeGroupByOutputType = {
    id: number
    username: string
    password: string | null
    phonenumber: string
    position: string
    image: string
    point: number
    createAt: Date
    status: boolean
    _count: EmployyeCountAggregateOutputType | null
    _avg: EmployyeAvgAggregateOutputType | null
    _sum: EmployyeSumAggregateOutputType | null
    _min: EmployyeMinAggregateOutputType | null
    _max: EmployyeMaxAggregateOutputType | null
  }

  type GetEmployyeGroupByPayload<T extends EmployyeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployyeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployyeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployyeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployyeGroupByOutputType[P]>
        }
      >
    >


  export type EmployyeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    phonenumber?: boolean
    position?: boolean
    image?: boolean
    point?: boolean
    createAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["employye"]>



  export type EmployyeSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    phonenumber?: boolean
    position?: boolean
    image?: boolean
    point?: boolean
    createAt?: boolean
    status?: boolean
  }

  export type EmployyeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "phonenumber" | "position" | "image" | "point" | "createAt" | "status", ExtArgs["result"]["employye"]>

  export type $EmployyePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employye"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string | null
      phonenumber: string
      position: string
      image: string
      point: number
      createAt: Date
      status: boolean
    }, ExtArgs["result"]["employye"]>
    composites: {}
  }

  type EmployyeGetPayload<S extends boolean | null | undefined | EmployyeDefaultArgs> = $Result.GetResult<Prisma.$EmployyePayload, S>

  type EmployyeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployyeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployyeCountAggregateInputType | true
    }

  export interface EmployyeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employye'], meta: { name: 'Employye' } }
    /**
     * Find zero or one Employye that matches the filter.
     * @param {EmployyeFindUniqueArgs} args - Arguments to find a Employye
     * @example
     * // Get one Employye
     * const employye = await prisma.employye.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployyeFindUniqueArgs>(args: SelectSubset<T, EmployyeFindUniqueArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employye that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployyeFindUniqueOrThrowArgs} args - Arguments to find a Employye
     * @example
     * // Get one Employye
     * const employye = await prisma.employye.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployyeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployyeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employye that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeFindFirstArgs} args - Arguments to find a Employye
     * @example
     * // Get one Employye
     * const employye = await prisma.employye.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployyeFindFirstArgs>(args?: SelectSubset<T, EmployyeFindFirstArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employye that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeFindFirstOrThrowArgs} args - Arguments to find a Employye
     * @example
     * // Get one Employye
     * const employye = await prisma.employye.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployyeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployyeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employyes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employyes
     * const employyes = await prisma.employye.findMany()
     * 
     * // Get first 10 Employyes
     * const employyes = await prisma.employye.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employyeWithIdOnly = await prisma.employye.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployyeFindManyArgs>(args?: SelectSubset<T, EmployyeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employye.
     * @param {EmployyeCreateArgs} args - Arguments to create a Employye.
     * @example
     * // Create one Employye
     * const Employye = await prisma.employye.create({
     *   data: {
     *     // ... data to create a Employye
     *   }
     * })
     * 
     */
    create<T extends EmployyeCreateArgs>(args: SelectSubset<T, EmployyeCreateArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employyes.
     * @param {EmployyeCreateManyArgs} args - Arguments to create many Employyes.
     * @example
     * // Create many Employyes
     * const employye = await prisma.employye.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployyeCreateManyArgs>(args?: SelectSubset<T, EmployyeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employye.
     * @param {EmployyeDeleteArgs} args - Arguments to delete one Employye.
     * @example
     * // Delete one Employye
     * const Employye = await prisma.employye.delete({
     *   where: {
     *     // ... filter to delete one Employye
     *   }
     * })
     * 
     */
    delete<T extends EmployyeDeleteArgs>(args: SelectSubset<T, EmployyeDeleteArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employye.
     * @param {EmployyeUpdateArgs} args - Arguments to update one Employye.
     * @example
     * // Update one Employye
     * const employye = await prisma.employye.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployyeUpdateArgs>(args: SelectSubset<T, EmployyeUpdateArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employyes.
     * @param {EmployyeDeleteManyArgs} args - Arguments to filter Employyes to delete.
     * @example
     * // Delete a few Employyes
     * const { count } = await prisma.employye.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployyeDeleteManyArgs>(args?: SelectSubset<T, EmployyeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employyes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employyes
     * const employye = await prisma.employye.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployyeUpdateManyArgs>(args: SelectSubset<T, EmployyeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employye.
     * @param {EmployyeUpsertArgs} args - Arguments to update or create a Employye.
     * @example
     * // Update or create a Employye
     * const employye = await prisma.employye.upsert({
     *   create: {
     *     // ... data to create a Employye
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employye we want to update
     *   }
     * })
     */
    upsert<T extends EmployyeUpsertArgs>(args: SelectSubset<T, EmployyeUpsertArgs<ExtArgs>>): Prisma__EmployyeClient<$Result.GetResult<Prisma.$EmployyePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employyes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeCountArgs} args - Arguments to filter Employyes to count.
     * @example
     * // Count the number of Employyes
     * const count = await prisma.employye.count({
     *   where: {
     *     // ... the filter for the Employyes we want to count
     *   }
     * })
    **/
    count<T extends EmployyeCountArgs>(
      args?: Subset<T, EmployyeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployyeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employye.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployyeAggregateArgs>(args: Subset<T, EmployyeAggregateArgs>): Prisma.PrismaPromise<GetEmployyeAggregateType<T>>

    /**
     * Group by Employye.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployyeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployyeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployyeGroupByArgs['orderBy'] }
        : { orderBy?: EmployyeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployyeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployyeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employye model
   */
  readonly fields: EmployyeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employye.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployyeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employye model
   */
  interface EmployyeFieldRefs {
    readonly id: FieldRef<"Employye", 'Int'>
    readonly username: FieldRef<"Employye", 'String'>
    readonly password: FieldRef<"Employye", 'String'>
    readonly phonenumber: FieldRef<"Employye", 'String'>
    readonly position: FieldRef<"Employye", 'String'>
    readonly image: FieldRef<"Employye", 'String'>
    readonly point: FieldRef<"Employye", 'Int'>
    readonly createAt: FieldRef<"Employye", 'DateTime'>
    readonly status: FieldRef<"Employye", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Employye findUnique
   */
  export type EmployyeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter, which Employye to fetch.
     */
    where: EmployyeWhereUniqueInput
  }

  /**
   * Employye findUniqueOrThrow
   */
  export type EmployyeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter, which Employye to fetch.
     */
    where: EmployyeWhereUniqueInput
  }

  /**
   * Employye findFirst
   */
  export type EmployyeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter, which Employye to fetch.
     */
    where?: EmployyeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employyes to fetch.
     */
    orderBy?: EmployyeOrderByWithRelationInput | EmployyeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employyes.
     */
    cursor?: EmployyeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employyes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employyes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employyes.
     */
    distinct?: EmployyeScalarFieldEnum | EmployyeScalarFieldEnum[]
  }

  /**
   * Employye findFirstOrThrow
   */
  export type EmployyeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter, which Employye to fetch.
     */
    where?: EmployyeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employyes to fetch.
     */
    orderBy?: EmployyeOrderByWithRelationInput | EmployyeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employyes.
     */
    cursor?: EmployyeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employyes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employyes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employyes.
     */
    distinct?: EmployyeScalarFieldEnum | EmployyeScalarFieldEnum[]
  }

  /**
   * Employye findMany
   */
  export type EmployyeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter, which Employyes to fetch.
     */
    where?: EmployyeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employyes to fetch.
     */
    orderBy?: EmployyeOrderByWithRelationInput | EmployyeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employyes.
     */
    cursor?: EmployyeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employyes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employyes.
     */
    skip?: number
    distinct?: EmployyeScalarFieldEnum | EmployyeScalarFieldEnum[]
  }

  /**
   * Employye create
   */
  export type EmployyeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * The data needed to create a Employye.
     */
    data: XOR<EmployyeCreateInput, EmployyeUncheckedCreateInput>
  }

  /**
   * Employye createMany
   */
  export type EmployyeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employyes.
     */
    data: EmployyeCreateManyInput | EmployyeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employye update
   */
  export type EmployyeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * The data needed to update a Employye.
     */
    data: XOR<EmployyeUpdateInput, EmployyeUncheckedUpdateInput>
    /**
     * Choose, which Employye to update.
     */
    where: EmployyeWhereUniqueInput
  }

  /**
   * Employye updateMany
   */
  export type EmployyeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employyes.
     */
    data: XOR<EmployyeUpdateManyMutationInput, EmployyeUncheckedUpdateManyInput>
    /**
     * Filter which Employyes to update
     */
    where?: EmployyeWhereInput
    /**
     * Limit how many Employyes to update.
     */
    limit?: number
  }

  /**
   * Employye upsert
   */
  export type EmployyeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * The filter to search for the Employye to update in case it exists.
     */
    where: EmployyeWhereUniqueInput
    /**
     * In case the Employye found by the `where` argument doesn't exist, create a new Employye with this data.
     */
    create: XOR<EmployyeCreateInput, EmployyeUncheckedCreateInput>
    /**
     * In case the Employye was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployyeUpdateInput, EmployyeUncheckedUpdateInput>
  }

  /**
   * Employye delete
   */
  export type EmployyeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
    /**
     * Filter which Employye to delete.
     */
    where: EmployyeWhereUniqueInput
  }

  /**
   * Employye deleteMany
   */
  export type EmployyeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employyes to delete
     */
    where?: EmployyeWhereInput
    /**
     * Limit how many Employyes to delete.
     */
    limit?: number
  }

  /**
   * Employye without action
   */
  export type EmployyeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employye
     */
    select?: EmployyeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employye
     */
    omit?: EmployyeOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    username: string | null
    image: string | null
    phonenumber: string | null
    password: string | null
    point: number | null
    createAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    image: string | null
    phonenumber: string | null
    password: string | null
    point: number | null
    createAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    username: number
    image: number
    phonenumber: number
    password: number
    point: number
    createAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    point?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    point?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    username?: true
    image?: true
    phonenumber?: true
    password?: true
    point?: true
    createAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    username?: true
    image?: true
    phonenumber?: true
    password?: true
    point?: true
    createAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    username?: true
    image?: true
    phonenumber?: true
    password?: true
    point?: true
    createAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    username: string
    image: string | null
    phonenumber: string
    password: string | null
    point: number
    createAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    image?: boolean
    phonenumber?: boolean
    password?: boolean
    point?: boolean
    createAt?: boolean
    bill?: boolean | Customer$billArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    username?: boolean
    image?: boolean
    phonenumber?: boolean
    password?: boolean
    point?: boolean
    createAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "image" | "phonenumber" | "password" | "point" | "createAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | Customer$billArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bill: Prisma.$CustomerBillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      image: string | null
      phonenumber: string
      password: string | null
      point: number
      createAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends Customer$billArgs<ExtArgs> = {}>(args?: Subset<T, Customer$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly username: FieldRef<"Customer", 'String'>
    readonly image: FieldRef<"Customer", 'String'>
    readonly phonenumber: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly point: FieldRef<"Customer", 'Int'>
    readonly createAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.bill
   */
  export type Customer$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    where?: CustomerBillWhereInput
    orderBy?: CustomerBillOrderByWithRelationInput | CustomerBillOrderByWithRelationInput[]
    cursor?: CustomerBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerBillScalarFieldEnum | CustomerBillScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerBill
   */

  export type AggregateCustomerBill = {
    _count: CustomerBillCountAggregateOutputType | null
    _avg: CustomerBillAvgAggregateOutputType | null
    _sum: CustomerBillSumAggregateOutputType | null
    _min: CustomerBillMinAggregateOutputType | null
    _max: CustomerBillMaxAggregateOutputType | null
  }

  export type CustomerBillAvgAggregateOutputType = {
    id: number | null
    totalMenu: number | null
    customerId: number | null
  }

  export type CustomerBillSumAggregateOutputType = {
    id: number | null
    totalMenu: number | null
    customerId: number | null
  }

  export type CustomerBillMinAggregateOutputType = {
    id: number | null
    createAt: Date | null
    totalMenu: number | null
    status: boolean | null
    update: Date | null
    customerId: number | null
  }

  export type CustomerBillMaxAggregateOutputType = {
    id: number | null
    createAt: Date | null
    totalMenu: number | null
    status: boolean | null
    update: Date | null
    customerId: number | null
  }

  export type CustomerBillCountAggregateOutputType = {
    id: number
    createAt: number
    totalMenu: number
    status: number
    update: number
    customerId: number
    _all: number
  }


  export type CustomerBillAvgAggregateInputType = {
    id?: true
    totalMenu?: true
    customerId?: true
  }

  export type CustomerBillSumAggregateInputType = {
    id?: true
    totalMenu?: true
    customerId?: true
  }

  export type CustomerBillMinAggregateInputType = {
    id?: true
    createAt?: true
    totalMenu?: true
    status?: true
    update?: true
    customerId?: true
  }

  export type CustomerBillMaxAggregateInputType = {
    id?: true
    createAt?: true
    totalMenu?: true
    status?: true
    update?: true
    customerId?: true
  }

  export type CustomerBillCountAggregateInputType = {
    id?: true
    createAt?: true
    totalMenu?: true
    status?: true
    update?: true
    customerId?: true
    _all?: true
  }

  export type CustomerBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerBill to aggregate.
     */
    where?: CustomerBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerBills to fetch.
     */
    orderBy?: CustomerBillOrderByWithRelationInput | CustomerBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerBills
    **/
    _count?: true | CustomerBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerBillMaxAggregateInputType
  }

  export type GetCustomerBillAggregateType<T extends CustomerBillAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerBill[P]>
      : GetScalarType<T[P], AggregateCustomerBill[P]>
  }




  export type CustomerBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerBillWhereInput
    orderBy?: CustomerBillOrderByWithAggregationInput | CustomerBillOrderByWithAggregationInput[]
    by: CustomerBillScalarFieldEnum[] | CustomerBillScalarFieldEnum
    having?: CustomerBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerBillCountAggregateInputType | true
    _avg?: CustomerBillAvgAggregateInputType
    _sum?: CustomerBillSumAggregateInputType
    _min?: CustomerBillMinAggregateInputType
    _max?: CustomerBillMaxAggregateInputType
  }

  export type CustomerBillGroupByOutputType = {
    id: number
    createAt: Date
    totalMenu: number
    status: boolean
    update: Date | null
    customerId: number
    _count: CustomerBillCountAggregateOutputType | null
    _avg: CustomerBillAvgAggregateOutputType | null
    _sum: CustomerBillSumAggregateOutputType | null
    _min: CustomerBillMinAggregateOutputType | null
    _max: CustomerBillMaxAggregateOutputType | null
  }

  type GetCustomerBillGroupByPayload<T extends CustomerBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerBillGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerBillGroupByOutputType[P]>
        }
      >
    >


  export type CustomerBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    totalMenu?: boolean
    status?: boolean
    update?: boolean
    customerId?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerBill"]>



  export type CustomerBillSelectScalar = {
    id?: boolean
    createAt?: boolean
    totalMenu?: boolean
    status?: boolean
    update?: boolean
    customerId?: boolean
  }

  export type CustomerBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createAt" | "totalMenu" | "status" | "update" | "customerId", ExtArgs["result"]["customerBill"]>
  export type CustomerBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerBill"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createAt: Date
      totalMenu: number
      status: boolean
      update: Date | null
      customerId: number
    }, ExtArgs["result"]["customerBill"]>
    composites: {}
  }

  type CustomerBillGetPayload<S extends boolean | null | undefined | CustomerBillDefaultArgs> = $Result.GetResult<Prisma.$CustomerBillPayload, S>

  type CustomerBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerBillCountAggregateInputType | true
    }

  export interface CustomerBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerBill'], meta: { name: 'CustomerBill' } }
    /**
     * Find zero or one CustomerBill that matches the filter.
     * @param {CustomerBillFindUniqueArgs} args - Arguments to find a CustomerBill
     * @example
     * // Get one CustomerBill
     * const customerBill = await prisma.customerBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerBillFindUniqueArgs>(args: SelectSubset<T, CustomerBillFindUniqueArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerBillFindUniqueOrThrowArgs} args - Arguments to find a CustomerBill
     * @example
     * // Get one CustomerBill
     * const customerBill = await prisma.customerBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerBillFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillFindFirstArgs} args - Arguments to find a CustomerBill
     * @example
     * // Get one CustomerBill
     * const customerBill = await prisma.customerBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerBillFindFirstArgs>(args?: SelectSubset<T, CustomerBillFindFirstArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillFindFirstOrThrowArgs} args - Arguments to find a CustomerBill
     * @example
     * // Get one CustomerBill
     * const customerBill = await prisma.customerBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerBillFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerBills
     * const customerBills = await prisma.customerBill.findMany()
     * 
     * // Get first 10 CustomerBills
     * const customerBills = await prisma.customerBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerBillWithIdOnly = await prisma.customerBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerBillFindManyArgs>(args?: SelectSubset<T, CustomerBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerBill.
     * @param {CustomerBillCreateArgs} args - Arguments to create a CustomerBill.
     * @example
     * // Create one CustomerBill
     * const CustomerBill = await prisma.customerBill.create({
     *   data: {
     *     // ... data to create a CustomerBill
     *   }
     * })
     * 
     */
    create<T extends CustomerBillCreateArgs>(args: SelectSubset<T, CustomerBillCreateArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerBills.
     * @param {CustomerBillCreateManyArgs} args - Arguments to create many CustomerBills.
     * @example
     * // Create many CustomerBills
     * const customerBill = await prisma.customerBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerBillCreateManyArgs>(args?: SelectSubset<T, CustomerBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerBill.
     * @param {CustomerBillDeleteArgs} args - Arguments to delete one CustomerBill.
     * @example
     * // Delete one CustomerBill
     * const CustomerBill = await prisma.customerBill.delete({
     *   where: {
     *     // ... filter to delete one CustomerBill
     *   }
     * })
     * 
     */
    delete<T extends CustomerBillDeleteArgs>(args: SelectSubset<T, CustomerBillDeleteArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerBill.
     * @param {CustomerBillUpdateArgs} args - Arguments to update one CustomerBill.
     * @example
     * // Update one CustomerBill
     * const customerBill = await prisma.customerBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerBillUpdateArgs>(args: SelectSubset<T, CustomerBillUpdateArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerBills.
     * @param {CustomerBillDeleteManyArgs} args - Arguments to filter CustomerBills to delete.
     * @example
     * // Delete a few CustomerBills
     * const { count } = await prisma.customerBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerBillDeleteManyArgs>(args?: SelectSubset<T, CustomerBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerBills
     * const customerBill = await prisma.customerBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerBillUpdateManyArgs>(args: SelectSubset<T, CustomerBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerBill.
     * @param {CustomerBillUpsertArgs} args - Arguments to update or create a CustomerBill.
     * @example
     * // Update or create a CustomerBill
     * const customerBill = await prisma.customerBill.upsert({
     *   create: {
     *     // ... data to create a CustomerBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerBill we want to update
     *   }
     * })
     */
    upsert<T extends CustomerBillUpsertArgs>(args: SelectSubset<T, CustomerBillUpsertArgs<ExtArgs>>): Prisma__CustomerBillClient<$Result.GetResult<Prisma.$CustomerBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillCountArgs} args - Arguments to filter CustomerBills to count.
     * @example
     * // Count the number of CustomerBills
     * const count = await prisma.customerBill.count({
     *   where: {
     *     // ... the filter for the CustomerBills we want to count
     *   }
     * })
    **/
    count<T extends CustomerBillCountArgs>(
      args?: Subset<T, CustomerBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerBillAggregateArgs>(args: Subset<T, CustomerBillAggregateArgs>): Prisma.PrismaPromise<GetCustomerBillAggregateType<T>>

    /**
     * Group by CustomerBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerBillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerBillGroupByArgs['orderBy'] }
        : { orderBy?: CustomerBillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerBill model
   */
  readonly fields: CustomerBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerBill model
   */
  interface CustomerBillFieldRefs {
    readonly id: FieldRef<"CustomerBill", 'Int'>
    readonly createAt: FieldRef<"CustomerBill", 'DateTime'>
    readonly totalMenu: FieldRef<"CustomerBill", 'Int'>
    readonly status: FieldRef<"CustomerBill", 'Boolean'>
    readonly update: FieldRef<"CustomerBill", 'DateTime'>
    readonly customerId: FieldRef<"CustomerBill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CustomerBill findUnique
   */
  export type CustomerBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter, which CustomerBill to fetch.
     */
    where: CustomerBillWhereUniqueInput
  }

  /**
   * CustomerBill findUniqueOrThrow
   */
  export type CustomerBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter, which CustomerBill to fetch.
     */
    where: CustomerBillWhereUniqueInput
  }

  /**
   * CustomerBill findFirst
   */
  export type CustomerBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter, which CustomerBill to fetch.
     */
    where?: CustomerBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerBills to fetch.
     */
    orderBy?: CustomerBillOrderByWithRelationInput | CustomerBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerBills.
     */
    cursor?: CustomerBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerBills.
     */
    distinct?: CustomerBillScalarFieldEnum | CustomerBillScalarFieldEnum[]
  }

  /**
   * CustomerBill findFirstOrThrow
   */
  export type CustomerBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter, which CustomerBill to fetch.
     */
    where?: CustomerBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerBills to fetch.
     */
    orderBy?: CustomerBillOrderByWithRelationInput | CustomerBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerBills.
     */
    cursor?: CustomerBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerBills.
     */
    distinct?: CustomerBillScalarFieldEnum | CustomerBillScalarFieldEnum[]
  }

  /**
   * CustomerBill findMany
   */
  export type CustomerBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter, which CustomerBills to fetch.
     */
    where?: CustomerBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerBills to fetch.
     */
    orderBy?: CustomerBillOrderByWithRelationInput | CustomerBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerBills.
     */
    cursor?: CustomerBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerBills.
     */
    skip?: number
    distinct?: CustomerBillScalarFieldEnum | CustomerBillScalarFieldEnum[]
  }

  /**
   * CustomerBill create
   */
  export type CustomerBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerBill.
     */
    data: XOR<CustomerBillCreateInput, CustomerBillUncheckedCreateInput>
  }

  /**
   * CustomerBill createMany
   */
  export type CustomerBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerBills.
     */
    data: CustomerBillCreateManyInput | CustomerBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerBill update
   */
  export type CustomerBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerBill.
     */
    data: XOR<CustomerBillUpdateInput, CustomerBillUncheckedUpdateInput>
    /**
     * Choose, which CustomerBill to update.
     */
    where: CustomerBillWhereUniqueInput
  }

  /**
   * CustomerBill updateMany
   */
  export type CustomerBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerBills.
     */
    data: XOR<CustomerBillUpdateManyMutationInput, CustomerBillUncheckedUpdateManyInput>
    /**
     * Filter which CustomerBills to update
     */
    where?: CustomerBillWhereInput
    /**
     * Limit how many CustomerBills to update.
     */
    limit?: number
  }

  /**
   * CustomerBill upsert
   */
  export type CustomerBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerBill to update in case it exists.
     */
    where: CustomerBillWhereUniqueInput
    /**
     * In case the CustomerBill found by the `where` argument doesn't exist, create a new CustomerBill with this data.
     */
    create: XOR<CustomerBillCreateInput, CustomerBillUncheckedCreateInput>
    /**
     * In case the CustomerBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerBillUpdateInput, CustomerBillUncheckedUpdateInput>
  }

  /**
   * CustomerBill delete
   */
  export type CustomerBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
    /**
     * Filter which CustomerBill to delete.
     */
    where: CustomerBillWhereUniqueInput
  }

  /**
   * CustomerBill deleteMany
   */
  export type CustomerBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerBills to delete
     */
    where?: CustomerBillWhereInput
    /**
     * Limit how many CustomerBills to delete.
     */
    limit?: number
  }

  /**
   * CustomerBill without action
   */
  export type CustomerBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerBill
     */
    select?: CustomerBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerBill
     */
    omit?: CustomerBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerBillInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categorysId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    categorysId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    size: string | null
    categorysId: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    size: string | null
    categorysId: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    size: number
    categorysId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    categorysId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    categorysId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    size?: true
    categorysId?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    size?: true
    categorysId?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    size?: true
    categorysId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    image: string
    price: number
    size: string
    categorysId: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    size?: boolean
    categorysId?: boolean
    Categorys?: boolean | Products$CategorysArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    size?: boolean
    categorysId?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "price" | "size" | "categorysId", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categorys?: boolean | Products$CategorysArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Categorys: Prisma.$CategorysPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      price: number
      size: string
      categorysId: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Categorys<T extends Products$CategorysArgs<ExtArgs> = {}>(args?: Subset<T, Products$CategorysArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly image: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Int'>
    readonly size: FieldRef<"Products", 'String'>
    readonly categorysId: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Categorys
   */
  export type Products$CategorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    where?: CategorysWhereInput
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Categorys
   */

  export type AggregateCategorys = {
    _count: CategorysCountAggregateOutputType | null
    _avg: CategorysAvgAggregateOutputType | null
    _sum: CategorysSumAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  export type CategorysAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorysSumAggregateOutputType = {
    id: number | null
  }

  export type CategorysMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
  }

  export type CategorysMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
  }

  export type CategorysCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    _all: number
  }


  export type CategorysAvgAggregateInputType = {
    id?: true
  }

  export type CategorysSumAggregateInputType = {
    id?: true
  }

  export type CategorysMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type CategorysMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
  }

  export type CategorysCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    _all?: true
  }

  export type CategorysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorys to aggregate.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorys
    **/
    _count?: true | CategorysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorysMaxAggregateInputType
  }

  export type GetCategorysAggregateType<T extends CategorysAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorys[P]>
      : GetScalarType<T[P], AggregateCategorys[P]>
  }




  export type CategorysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorysWhereInput
    orderBy?: CategorysOrderByWithAggregationInput | CategorysOrderByWithAggregationInput[]
    by: CategorysScalarFieldEnum[] | CategorysScalarFieldEnum
    having?: CategorysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorysCountAggregateInputType | true
    _avg?: CategorysAvgAggregateInputType
    _sum?: CategorysSumAggregateInputType
    _min?: CategorysMinAggregateInputType
    _max?: CategorysMaxAggregateInputType
  }

  export type CategorysGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    _count: CategorysCountAggregateOutputType | null
    _avg: CategorysAvgAggregateOutputType | null
    _sum: CategorysSumAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  type GetCategorysGroupByPayload<T extends CategorysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorysGroupByOutputType[P]>
            : GetScalarType<T[P], CategorysGroupByOutputType[P]>
        }
      >
    >


  export type CategorysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    products?: boolean | Categorys$productsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorys"]>



  export type CategorysSelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
  }

  export type CategorysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createAt", ExtArgs["result"]["categorys"]>
  export type CategorysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Categorys$productsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategorysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorys"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createAt: Date
    }, ExtArgs["result"]["categorys"]>
    composites: {}
  }

  type CategorysGetPayload<S extends boolean | null | undefined | CategorysDefaultArgs> = $Result.GetResult<Prisma.$CategorysPayload, S>

  type CategorysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorysCountAggregateInputType | true
    }

  export interface CategorysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorys'], meta: { name: 'Categorys' } }
    /**
     * Find zero or one Categorys that matches the filter.
     * @param {CategorysFindUniqueArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorysFindUniqueArgs>(args: SelectSubset<T, CategorysFindUniqueArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorysFindUniqueOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorysFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindFirstArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorysFindFirstArgs>(args?: SelectSubset<T, CategorysFindFirstArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindFirstOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorysFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorysFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorys
     * const categorys = await prisma.categorys.findMany()
     * 
     * // Get first 10 Categorys
     * const categorys = await prisma.categorys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorysWithIdOnly = await prisma.categorys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorysFindManyArgs>(args?: SelectSubset<T, CategorysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorys.
     * @param {CategorysCreateArgs} args - Arguments to create a Categorys.
     * @example
     * // Create one Categorys
     * const Categorys = await prisma.categorys.create({
     *   data: {
     *     // ... data to create a Categorys
     *   }
     * })
     * 
     */
    create<T extends CategorysCreateArgs>(args: SelectSubset<T, CategorysCreateArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorys.
     * @param {CategorysCreateManyArgs} args - Arguments to create many Categorys.
     * @example
     * // Create many Categorys
     * const categorys = await prisma.categorys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorysCreateManyArgs>(args?: SelectSubset<T, CategorysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorys.
     * @param {CategorysDeleteArgs} args - Arguments to delete one Categorys.
     * @example
     * // Delete one Categorys
     * const Categorys = await prisma.categorys.delete({
     *   where: {
     *     // ... filter to delete one Categorys
     *   }
     * })
     * 
     */
    delete<T extends CategorysDeleteArgs>(args: SelectSubset<T, CategorysDeleteArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorys.
     * @param {CategorysUpdateArgs} args - Arguments to update one Categorys.
     * @example
     * // Update one Categorys
     * const categorys = await prisma.categorys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorysUpdateArgs>(args: SelectSubset<T, CategorysUpdateArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorys.
     * @param {CategorysDeleteManyArgs} args - Arguments to filter Categorys to delete.
     * @example
     * // Delete a few Categorys
     * const { count } = await prisma.categorys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorysDeleteManyArgs>(args?: SelectSubset<T, CategorysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorys
     * const categorys = await prisma.categorys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorysUpdateManyArgs>(args: SelectSubset<T, CategorysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorys.
     * @param {CategorysUpsertArgs} args - Arguments to update or create a Categorys.
     * @example
     * // Update or create a Categorys
     * const categorys = await prisma.categorys.upsert({
     *   create: {
     *     // ... data to create a Categorys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorys we want to update
     *   }
     * })
     */
    upsert<T extends CategorysUpsertArgs>(args: SelectSubset<T, CategorysUpsertArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysCountArgs} args - Arguments to filter Categorys to count.
     * @example
     * // Count the number of Categorys
     * const count = await prisma.categorys.count({
     *   where: {
     *     // ... the filter for the Categorys we want to count
     *   }
     * })
    **/
    count<T extends CategorysCountArgs>(
      args?: Subset<T, CategorysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorysAggregateArgs>(args: Subset<T, CategorysAggregateArgs>): Prisma.PrismaPromise<GetCategorysAggregateType<T>>

    /**
     * Group by Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorysGroupByArgs['orderBy'] }
        : { orderBy?: CategorysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorys model
   */
  readonly fields: CategorysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Categorys$productsArgs<ExtArgs> = {}>(args?: Subset<T, Categorys$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorys model
   */
  interface CategorysFieldRefs {
    readonly id: FieldRef<"Categorys", 'Int'>
    readonly name: FieldRef<"Categorys", 'String'>
    readonly createAt: FieldRef<"Categorys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categorys findUnique
   */
  export type CategorysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys findUniqueOrThrow
   */
  export type CategorysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys findFirst
   */
  export type CategorysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys findFirstOrThrow
   */
  export type CategorysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys findMany
   */
  export type CategorysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys create
   */
  export type CategorysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorys.
     */
    data: XOR<CategorysCreateInput, CategorysUncheckedCreateInput>
  }

  /**
   * Categorys createMany
   */
  export type CategorysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorys.
     */
    data: CategorysCreateManyInput | CategorysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorys update
   */
  export type CategorysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorys.
     */
    data: XOR<CategorysUpdateInput, CategorysUncheckedUpdateInput>
    /**
     * Choose, which Categorys to update.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys updateMany
   */
  export type CategorysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorys.
     */
    data: XOR<CategorysUpdateManyMutationInput, CategorysUncheckedUpdateManyInput>
    /**
     * Filter which Categorys to update
     */
    where?: CategorysWhereInput
    /**
     * Limit how many Categorys to update.
     */
    limit?: number
  }

  /**
   * Categorys upsert
   */
  export type CategorysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorys to update in case it exists.
     */
    where: CategorysWhereUniqueInput
    /**
     * In case the Categorys found by the `where` argument doesn't exist, create a new Categorys with this data.
     */
    create: XOR<CategorysCreateInput, CategorysUncheckedCreateInput>
    /**
     * In case the Categorys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorysUpdateInput, CategorysUncheckedUpdateInput>
  }

  /**
   * Categorys delete
   */
  export type CategorysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter which Categorys to delete.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys deleteMany
   */
  export type CategorysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorys to delete
     */
    where?: CategorysWhereInput
    /**
     * Limit how many Categorys to delete.
     */
    limit?: number
  }

  /**
   * Categorys.products
   */
  export type Categorys$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categorys without action
   */
  export type CategorysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployyeScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    phonenumber: 'phonenumber',
    position: 'position',
    image: 'image',
    point: 'point',
    createAt: 'createAt',
    status: 'status'
  };

  export type EmployyeScalarFieldEnum = (typeof EmployyeScalarFieldEnum)[keyof typeof EmployyeScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    image: 'image',
    phonenumber: 'phonenumber',
    password: 'password',
    point: 'point',
    createAt: 'createAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerBillScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    totalMenu: 'totalMenu',
    status: 'status',
    update: 'update',
    customerId: 'customerId'
  };

  export type CustomerBillScalarFieldEnum = (typeof CustomerBillScalarFieldEnum)[keyof typeof CustomerBillScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    size: 'size',
    categorysId: 'categorysId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CategorysScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt'
  };

  export type CategorysScalarFieldEnum = (typeof CategorysScalarFieldEnum)[keyof typeof CategorysScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployyeOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    phonenumber: 'phonenumber',
    position: 'position',
    image: 'image'
  };

  export type EmployyeOrderByRelevanceFieldEnum = (typeof EmployyeOrderByRelevanceFieldEnum)[keyof typeof EmployyeOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    username: 'username',
    image: 'image',
    phonenumber: 'phonenumber',
    password: 'password'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const ProductsOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image',
    size: 'size'
  };

  export type ProductsOrderByRelevanceFieldEnum = (typeof ProductsOrderByRelevanceFieldEnum)[keyof typeof ProductsOrderByRelevanceFieldEnum]


  export const CategorysOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategorysOrderByRelevanceFieldEnum = (typeof CategorysOrderByRelevanceFieldEnum)[keyof typeof CategorysOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployyeWhereInput = {
    AND?: EmployyeWhereInput | EmployyeWhereInput[]
    OR?: EmployyeWhereInput[]
    NOT?: EmployyeWhereInput | EmployyeWhereInput[]
    id?: IntFilter<"Employye"> | number
    username?: StringFilter<"Employye"> | string
    password?: StringNullableFilter<"Employye"> | string | null
    phonenumber?: StringFilter<"Employye"> | string
    position?: StringFilter<"Employye"> | string
    image?: StringFilter<"Employye"> | string
    point?: IntFilter<"Employye"> | number
    createAt?: DateTimeFilter<"Employye"> | Date | string
    status?: BoolFilter<"Employye"> | boolean
  }

  export type EmployyeOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    phonenumber?: SortOrder
    position?: SortOrder
    image?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
    status?: SortOrder
    _relevance?: EmployyeOrderByRelevanceInput
  }

  export type EmployyeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployyeWhereInput | EmployyeWhereInput[]
    OR?: EmployyeWhereInput[]
    NOT?: EmployyeWhereInput | EmployyeWhereInput[]
    username?: StringFilter<"Employye"> | string
    password?: StringNullableFilter<"Employye"> | string | null
    phonenumber?: StringFilter<"Employye"> | string
    position?: StringFilter<"Employye"> | string
    image?: StringFilter<"Employye"> | string
    point?: IntFilter<"Employye"> | number
    createAt?: DateTimeFilter<"Employye"> | Date | string
    status?: BoolFilter<"Employye"> | boolean
  }, "id" | "id">

  export type EmployyeOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    phonenumber?: SortOrder
    position?: SortOrder
    image?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
    status?: SortOrder
    _count?: EmployyeCountOrderByAggregateInput
    _avg?: EmployyeAvgOrderByAggregateInput
    _max?: EmployyeMaxOrderByAggregateInput
    _min?: EmployyeMinOrderByAggregateInput
    _sum?: EmployyeSumOrderByAggregateInput
  }

  export type EmployyeScalarWhereWithAggregatesInput = {
    AND?: EmployyeScalarWhereWithAggregatesInput | EmployyeScalarWhereWithAggregatesInput[]
    OR?: EmployyeScalarWhereWithAggregatesInput[]
    NOT?: EmployyeScalarWhereWithAggregatesInput | EmployyeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employye"> | number
    username?: StringWithAggregatesFilter<"Employye"> | string
    password?: StringNullableWithAggregatesFilter<"Employye"> | string | null
    phonenumber?: StringWithAggregatesFilter<"Employye"> | string
    position?: StringWithAggregatesFilter<"Employye"> | string
    image?: StringWithAggregatesFilter<"Employye"> | string
    point?: IntWithAggregatesFilter<"Employye"> | number
    createAt?: DateTimeWithAggregatesFilter<"Employye"> | Date | string
    status?: BoolWithAggregatesFilter<"Employye"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    username?: StringFilter<"Customer"> | string
    image?: StringNullableFilter<"Customer"> | string | null
    phonenumber?: StringFilter<"Customer"> | string
    password?: StringNullableFilter<"Customer"> | string | null
    point?: IntFilter<"Customer"> | number
    createAt?: DateTimeFilter<"Customer"> | Date | string
    bill?: CustomerBillListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrderInput | SortOrder
    phonenumber?: SortOrder
    password?: SortOrderInput | SortOrder
    point?: SortOrder
    createAt?: SortOrder
    bill?: CustomerBillOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    username?: StringFilter<"Customer"> | string
    image?: StringNullableFilter<"Customer"> | string | null
    phonenumber?: StringFilter<"Customer"> | string
    password?: StringNullableFilter<"Customer"> | string | null
    point?: IntFilter<"Customer"> | number
    createAt?: DateTimeFilter<"Customer"> | Date | string
    bill?: CustomerBillListRelationFilter
  }, "id" | "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrderInput | SortOrder
    phonenumber?: SortOrder
    password?: SortOrderInput | SortOrder
    point?: SortOrder
    createAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    username?: StringWithAggregatesFilter<"Customer"> | string
    image?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phonenumber?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    point?: IntWithAggregatesFilter<"Customer"> | number
    createAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CustomerBillWhereInput = {
    AND?: CustomerBillWhereInput | CustomerBillWhereInput[]
    OR?: CustomerBillWhereInput[]
    NOT?: CustomerBillWhereInput | CustomerBillWhereInput[]
    id?: IntFilter<"CustomerBill"> | number
    createAt?: DateTimeFilter<"CustomerBill"> | Date | string
    totalMenu?: IntFilter<"CustomerBill"> | number
    status?: BoolFilter<"CustomerBill"> | boolean
    update?: DateTimeNullableFilter<"CustomerBill"> | Date | string | null
    customerId?: IntFilter<"CustomerBill"> | number
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerBillOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    totalMenu?: SortOrder
    status?: SortOrder
    update?: SortOrderInput | SortOrder
    customerId?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerBillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerBillWhereInput | CustomerBillWhereInput[]
    OR?: CustomerBillWhereInput[]
    NOT?: CustomerBillWhereInput | CustomerBillWhereInput[]
    createAt?: DateTimeFilter<"CustomerBill"> | Date | string
    totalMenu?: IntFilter<"CustomerBill"> | number
    status?: BoolFilter<"CustomerBill"> | boolean
    update?: DateTimeNullableFilter<"CustomerBill"> | Date | string | null
    customerId?: IntFilter<"CustomerBill"> | number
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "id">

  export type CustomerBillOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    totalMenu?: SortOrder
    status?: SortOrder
    update?: SortOrderInput | SortOrder
    customerId?: SortOrder
    _count?: CustomerBillCountOrderByAggregateInput
    _avg?: CustomerBillAvgOrderByAggregateInput
    _max?: CustomerBillMaxOrderByAggregateInput
    _min?: CustomerBillMinOrderByAggregateInput
    _sum?: CustomerBillSumOrderByAggregateInput
  }

  export type CustomerBillScalarWhereWithAggregatesInput = {
    AND?: CustomerBillScalarWhereWithAggregatesInput | CustomerBillScalarWhereWithAggregatesInput[]
    OR?: CustomerBillScalarWhereWithAggregatesInput[]
    NOT?: CustomerBillScalarWhereWithAggregatesInput | CustomerBillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerBill"> | number
    createAt?: DateTimeWithAggregatesFilter<"CustomerBill"> | Date | string
    totalMenu?: IntWithAggregatesFilter<"CustomerBill"> | number
    status?: BoolWithAggregatesFilter<"CustomerBill"> | boolean
    update?: DateTimeNullableWithAggregatesFilter<"CustomerBill"> | Date | string | null
    customerId?: IntWithAggregatesFilter<"CustomerBill"> | number
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    size?: StringFilter<"Products"> | string
    categorysId?: IntNullableFilter<"Products"> | number | null
    Categorys?: XOR<CategorysNullableScalarRelationFilter, CategorysWhereInput> | null
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    size?: SortOrder
    categorysId?: SortOrderInput | SortOrder
    Categorys?: CategorysOrderByWithRelationInput
    _relevance?: ProductsOrderByRelevanceInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    size?: StringFilter<"Products"> | string
    categorysId?: IntNullableFilter<"Products"> | number | null
    Categorys?: XOR<CategorysNullableScalarRelationFilter, CategorysWhereInput> | null
  }, "id" | "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    size?: SortOrder
    categorysId?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    image?: StringWithAggregatesFilter<"Products"> | string
    price?: IntWithAggregatesFilter<"Products"> | number
    size?: StringWithAggregatesFilter<"Products"> | string
    categorysId?: IntNullableWithAggregatesFilter<"Products"> | number | null
  }

  export type CategorysWhereInput = {
    AND?: CategorysWhereInput | CategorysWhereInput[]
    OR?: CategorysWhereInput[]
    NOT?: CategorysWhereInput | CategorysWhereInput[]
    id?: IntFilter<"Categorys"> | number
    name?: StringFilter<"Categorys"> | string
    createAt?: DateTimeFilter<"Categorys"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type CategorysOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
    _relevance?: CategorysOrderByRelevanceInput
  }

  export type CategorysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategorysWhereInput | CategorysWhereInput[]
    OR?: CategorysWhereInput[]
    NOT?: CategorysWhereInput | CategorysWhereInput[]
    name?: StringFilter<"Categorys"> | string
    createAt?: DateTimeFilter<"Categorys"> | Date | string
    products?: ProductsListRelationFilter
  }, "id" | "id">

  export type CategorysOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    _count?: CategorysCountOrderByAggregateInput
    _avg?: CategorysAvgOrderByAggregateInput
    _max?: CategorysMaxOrderByAggregateInput
    _min?: CategorysMinOrderByAggregateInput
    _sum?: CategorysSumOrderByAggregateInput
  }

  export type CategorysScalarWhereWithAggregatesInput = {
    AND?: CategorysScalarWhereWithAggregatesInput | CategorysScalarWhereWithAggregatesInput[]
    OR?: CategorysScalarWhereWithAggregatesInput[]
    NOT?: CategorysScalarWhereWithAggregatesInput | CategorysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorys"> | number
    name?: StringWithAggregatesFilter<"Categorys"> | string
    createAt?: DateTimeWithAggregatesFilter<"Categorys"> | Date | string
  }

  export type EmployyeCreateInput = {
    username: string
    password?: string | null
    phonenumber: string
    position: string
    image: string
    point: number
    createAt?: Date | string
    status?: boolean
  }

  export type EmployyeUncheckedCreateInput = {
    id?: number
    username: string
    password?: string | null
    phonenumber: string
    position: string
    image: string
    point: number
    createAt?: Date | string
    status?: boolean
  }

  export type EmployyeUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployyeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployyeCreateManyInput = {
    id?: number
    username: string
    password?: string | null
    phonenumber: string
    position: string
    image: string
    point: number
    createAt?: Date | string
    status?: boolean
  }

  export type EmployyeUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployyeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    username: string
    image?: string | null
    phonenumber: string
    password?: string | null
    point?: number
    createAt?: Date | string
    bill?: CustomerBillCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    username: string
    image?: string | null
    phonenumber: string
    password?: string | null
    point?: number
    createAt?: Date | string
    bill?: CustomerBillUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: CustomerBillUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: CustomerBillUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    username: string
    image?: string | null
    phonenumber: string
    password?: string | null
    point?: number
    createAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerBillCreateInput = {
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
    Customer: CustomerCreateNestedOneWithoutBillInput
  }

  export type CustomerBillUncheckedCreateInput = {
    id?: number
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
    customerId: number
  }

  export type CustomerBillUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Customer?: CustomerUpdateOneRequiredWithoutBillNestedInput
  }

  export type CustomerBillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerBillCreateManyInput = {
    id?: number
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
    customerId: number
  }

  export type CustomerBillUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerBillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsCreateInput = {
    name: string
    image: string
    price: number
    size: string
    Categorys?: CategorysCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    size: string
    categorysId?: number | null
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    Categorys?: CategorysUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    categorysId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    image: string
    price: number
    size: string
    categorysId?: number | null
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    categorysId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategorysCreateInput = {
    name: string
    createAt?: Date | string
    products?: ProductsCreateNestedManyWithoutCategorysInput
  }

  export type CategorysUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutCategorysInput
  }

  export type CategorysUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutCategorysNestedInput
  }

  export type CategorysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutCategorysNestedInput
  }

  export type CategorysCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
  }

  export type CategorysUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployyeOrderByRelevanceInput = {
    fields: EmployyeOrderByRelevanceFieldEnum | EmployyeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployyeCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    position?: SortOrder
    image?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
    status?: SortOrder
  }

  export type EmployyeAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type EmployyeMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    position?: SortOrder
    image?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
    status?: SortOrder
  }

  export type EmployyeMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phonenumber?: SortOrder
    position?: SortOrder
    image?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
    status?: SortOrder
  }

  export type EmployyeSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerBillListRelationFilter = {
    every?: CustomerBillWhereInput
    some?: CustomerBillWhereInput
    none?: CustomerBillWhereInput
  }

  export type CustomerBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phonenumber?: SortOrder
    password?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phonenumber?: SortOrder
    password?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    phonenumber?: SortOrder
    password?: SortOrder
    point?: SortOrder
    createAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerBillCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    totalMenu?: SortOrder
    status?: SortOrder
    update?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerBillAvgOrderByAggregateInput = {
    id?: SortOrder
    totalMenu?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerBillMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    totalMenu?: SortOrder
    status?: SortOrder
    update?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerBillMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    totalMenu?: SortOrder
    status?: SortOrder
    update?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerBillSumOrderByAggregateInput = {
    id?: SortOrder
    totalMenu?: SortOrder
    customerId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategorysNullableScalarRelationFilter = {
    is?: CategorysWhereInput | null
    isNot?: CategorysWhereInput | null
  }

  export type ProductsOrderByRelevanceInput = {
    fields: ProductsOrderByRelevanceFieldEnum | ProductsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    size?: SortOrder
    categorysId?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categorysId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    size?: SortOrder
    categorysId?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    size?: SortOrder
    categorysId?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categorysId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorysOrderByRelevanceInput = {
    fields: CategorysOrderByRelevanceFieldEnum | CategorysOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategorysCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategorysAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorysMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategorysMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
  }

  export type CategorysSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerBillCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput> | CustomerBillCreateWithoutCustomerInput[] | CustomerBillUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerBillCreateOrConnectWithoutCustomerInput | CustomerBillCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerBillCreateManyCustomerInputEnvelope
    connect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
  }

  export type CustomerBillUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput> | CustomerBillCreateWithoutCustomerInput[] | CustomerBillUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerBillCreateOrConnectWithoutCustomerInput | CustomerBillCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerBillCreateManyCustomerInputEnvelope
    connect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
  }

  export type CustomerBillUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput> | CustomerBillCreateWithoutCustomerInput[] | CustomerBillUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerBillCreateOrConnectWithoutCustomerInput | CustomerBillCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerBillUpsertWithWhereUniqueWithoutCustomerInput | CustomerBillUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerBillCreateManyCustomerInputEnvelope
    set?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    disconnect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    delete?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    connect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    update?: CustomerBillUpdateWithWhereUniqueWithoutCustomerInput | CustomerBillUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerBillUpdateManyWithWhereWithoutCustomerInput | CustomerBillUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerBillScalarWhereInput | CustomerBillScalarWhereInput[]
  }

  export type CustomerBillUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput> | CustomerBillCreateWithoutCustomerInput[] | CustomerBillUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerBillCreateOrConnectWithoutCustomerInput | CustomerBillCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerBillUpsertWithWhereUniqueWithoutCustomerInput | CustomerBillUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerBillCreateManyCustomerInputEnvelope
    set?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    disconnect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    delete?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    connect?: CustomerBillWhereUniqueInput | CustomerBillWhereUniqueInput[]
    update?: CustomerBillUpdateWithWhereUniqueWithoutCustomerInput | CustomerBillUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerBillUpdateManyWithWhereWithoutCustomerInput | CustomerBillUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerBillScalarWhereInput | CustomerBillScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBillInput = {
    create?: XOR<CustomerCreateWithoutBillInput, CustomerUncheckedCreateWithoutBillInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBillInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutBillNestedInput = {
    create?: XOR<CustomerCreateWithoutBillInput, CustomerUncheckedCreateWithoutBillInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBillInput
    upsert?: CustomerUpsertWithoutBillInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBillInput, CustomerUpdateWithoutBillInput>, CustomerUncheckedUpdateWithoutBillInput>
  }

  export type CategorysCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategorysCreateWithoutProductsInput, CategorysUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutProductsInput
    connect?: CategorysWhereUniqueInput
  }

  export type CategorysUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategorysCreateWithoutProductsInput, CategorysUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutProductsInput
    upsert?: CategorysUpsertWithoutProductsInput
    disconnect?: CategorysWhereInput | boolean
    delete?: CategorysWhereInput | boolean
    connect?: CategorysWhereUniqueInput
    update?: XOR<XOR<CategorysUpdateToOneWithWhereWithoutProductsInput, CategorysUpdateWithoutProductsInput>, CategorysUncheckedUpdateWithoutProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsCreateNestedManyWithoutCategorysInput = {
    create?: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput> | ProductsCreateWithoutCategorysInput[] | ProductsUncheckedCreateWithoutCategorysInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategorysInput | ProductsCreateOrConnectWithoutCategorysInput[]
    createMany?: ProductsCreateManyCategorysInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategorysInput = {
    create?: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput> | ProductsCreateWithoutCategorysInput[] | ProductsUncheckedCreateWithoutCategorysInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategorysInput | ProductsCreateOrConnectWithoutCategorysInput[]
    createMany?: ProductsCreateManyCategorysInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategorysNestedInput = {
    create?: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput> | ProductsCreateWithoutCategorysInput[] | ProductsUncheckedCreateWithoutCategorysInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategorysInput | ProductsCreateOrConnectWithoutCategorysInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategorysInput | ProductsUpsertWithWhereUniqueWithoutCategorysInput[]
    createMany?: ProductsCreateManyCategorysInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategorysInput | ProductsUpdateWithWhereUniqueWithoutCategorysInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategorysInput | ProductsUpdateManyWithWhereWithoutCategorysInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategorysNestedInput = {
    create?: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput> | ProductsCreateWithoutCategorysInput[] | ProductsUncheckedCreateWithoutCategorysInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategorysInput | ProductsCreateOrConnectWithoutCategorysInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategorysInput | ProductsUpsertWithWhereUniqueWithoutCategorysInput[]
    createMany?: ProductsCreateManyCategorysInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategorysInput | ProductsUpdateWithWhereUniqueWithoutCategorysInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategorysInput | ProductsUpdateManyWithWhereWithoutCategorysInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerBillCreateWithoutCustomerInput = {
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
  }

  export type CustomerBillUncheckedCreateWithoutCustomerInput = {
    id?: number
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
  }

  export type CustomerBillCreateOrConnectWithoutCustomerInput = {
    where: CustomerBillWhereUniqueInput
    create: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerBillCreateManyCustomerInputEnvelope = {
    data: CustomerBillCreateManyCustomerInput | CustomerBillCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerBillUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerBillWhereUniqueInput
    update: XOR<CustomerBillUpdateWithoutCustomerInput, CustomerBillUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerBillCreateWithoutCustomerInput, CustomerBillUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerBillUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerBillWhereUniqueInput
    data: XOR<CustomerBillUpdateWithoutCustomerInput, CustomerBillUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerBillUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerBillScalarWhereInput
    data: XOR<CustomerBillUpdateManyMutationInput, CustomerBillUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerBillScalarWhereInput = {
    AND?: CustomerBillScalarWhereInput | CustomerBillScalarWhereInput[]
    OR?: CustomerBillScalarWhereInput[]
    NOT?: CustomerBillScalarWhereInput | CustomerBillScalarWhereInput[]
    id?: IntFilter<"CustomerBill"> | number
    createAt?: DateTimeFilter<"CustomerBill"> | Date | string
    totalMenu?: IntFilter<"CustomerBill"> | number
    status?: BoolFilter<"CustomerBill"> | boolean
    update?: DateTimeNullableFilter<"CustomerBill"> | Date | string | null
    customerId?: IntFilter<"CustomerBill"> | number
  }

  export type CustomerCreateWithoutBillInput = {
    username: string
    image?: string | null
    phonenumber: string
    password?: string | null
    point?: number
    createAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutBillInput = {
    id?: number
    username: string
    image?: string | null
    phonenumber: string
    password?: string | null
    point?: number
    createAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutBillInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBillInput, CustomerUncheckedCreateWithoutBillInput>
  }

  export type CustomerUpsertWithoutBillInput = {
    update: XOR<CustomerUpdateWithoutBillInput, CustomerUncheckedUpdateWithoutBillInput>
    create: XOR<CustomerCreateWithoutBillInput, CustomerUncheckedCreateWithoutBillInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBillInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBillInput, CustomerUncheckedUpdateWithoutBillInput>
  }

  export type CustomerUpdateWithoutBillInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorysCreateWithoutProductsInput = {
    name: string
    createAt?: Date | string
  }

  export type CategorysUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createAt?: Date | string
  }

  export type CategorysCreateOrConnectWithoutProductsInput = {
    where: CategorysWhereUniqueInput
    create: XOR<CategorysCreateWithoutProductsInput, CategorysUncheckedCreateWithoutProductsInput>
  }

  export type CategorysUpsertWithoutProductsInput = {
    update: XOR<CategorysUpdateWithoutProductsInput, CategorysUncheckedUpdateWithoutProductsInput>
    create: XOR<CategorysCreateWithoutProductsInput, CategorysUncheckedCreateWithoutProductsInput>
    where?: CategorysWhereInput
  }

  export type CategorysUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategorysWhereInput
    data: XOR<CategorysUpdateWithoutProductsInput, CategorysUncheckedUpdateWithoutProductsInput>
  }

  export type CategorysUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorysUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateWithoutCategorysInput = {
    name: string
    image: string
    price: number
    size: string
  }

  export type ProductsUncheckedCreateWithoutCategorysInput = {
    id?: number
    name: string
    image: string
    price: number
    size: string
  }

  export type ProductsCreateOrConnectWithoutCategorysInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput>
  }

  export type ProductsCreateManyCategorysInputEnvelope = {
    data: ProductsCreateManyCategorysInput | ProductsCreateManyCategorysInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategorysInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategorysInput, ProductsUncheckedUpdateWithoutCategorysInput>
    create: XOR<ProductsCreateWithoutCategorysInput, ProductsUncheckedCreateWithoutCategorysInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategorysInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategorysInput, ProductsUncheckedUpdateWithoutCategorysInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategorysInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategorysInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    image?: StringFilter<"Products"> | string
    price?: IntFilter<"Products"> | number
    size?: StringFilter<"Products"> | string
    categorysId?: IntNullableFilter<"Products"> | number | null
  }

  export type CustomerBillCreateManyCustomerInput = {
    id?: number
    createAt?: Date | string
    totalMenu: number
    status?: boolean
    update?: Date | string | null
  }

  export type CustomerBillUpdateWithoutCustomerInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerBillUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerBillUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalMenu?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyCategorysInput = {
    id?: number
    name: string
    image: string
    price: number
    size: string
  }

  export type ProductsUpdateWithoutCategorysInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateWithoutCategorysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyWithoutCategorysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}