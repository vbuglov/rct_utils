/// <reference types="ts-toolbelt" />
export declare const validators: {
    checkElementInArr: import("Function/Curry").Curry<(arr: any, el: any) => boolean>;
    checkMinMax: (params: any) => any;
    emptyArr: import("ramda").Pred;
    hasVal: import("Function/Curry").Curry<(obj: any, el: any) => boolean>;
    isArr: (val: any) => boolean;
    isEmptyValue: (x0: string) => boolean;
    isInArr: import("Function/Curry").Curry<(el: any, arr: any) => boolean>;
    isKeyExist: (key: string, obj: any) => boolean;
    isKeysExist: (keys: string[], obj: any) => boolean;
    isNumber: import("ramda").Pred;
    isObject: (val: any) => boolean;
    isString: (val: any) => boolean;
    nilOrEmpty: import("ramda").Pred;
    notEmpty: (x0: any) => boolean;
    notNaN: (x0: number) => boolean;
    notNil: (x0: any) => boolean;
    notNilAndNotNan: import("ramda").Pred;
    notUndef: (val: any) => boolean;
    rejectEmptyNames: <K extends unknown[] | import("ramda").Dictionary<unknown>>(source: K) => K extends (infer U)[] ? U[] : K extends import("ramda").Dictionary<infer U_1> ? import("ramda").Dictionary<U_1> : never;
    resolveAdd: import("Function/Curry").Curry<(resolver: any, obj: any, el: any) => any>;
    validateLength: (val: any, length: any) => any;
    validateType: (val: any, type: any) => any;
    validator: (obj: any, params: any) => any;
};
