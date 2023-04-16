import React from 'react';

// export type BaseQueryFn<
//   Args = string | number,
//   Result = unknown,
//   Error = unknown,
//   DefinitionExtraOptions = { ['string']: unknown },
//   Meta = { ['string']: unknown }
// > = (
//   args: Args,
//   api: BaseQueryApi,
//   extraOptions: DefinitionExtraOptions
// ) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;

// export interface BaseQueryApi {
//   signal: AbortSignal;
//   dispatch: ThunkDispatch<unknown, unknown, unknown>;
//   getState: () => unknown;
// }

// export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
//   | {
//       error: E;
//       data?: undefined;
//       meta?: M;
//     }
//   | {
//       error?: undefined;
//       data: T;
//       meta?: M;
//     };
