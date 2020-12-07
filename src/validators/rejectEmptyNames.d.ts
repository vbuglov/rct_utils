export declare const rejectEmptyNames: <K extends unknown[] | import('ramda').Dictionary<unknown>>(
  source: K,
) => K extends (infer U)[]
  ? U[]
  : K extends import('ramda').Dictionary<infer U_1>
  ? import('ramda').Dictionary<U_1>
  : never;
