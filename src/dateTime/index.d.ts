/// <reference types="ts-toolbelt" />
export declare const dateTime: {
    addHours: import("Function/Curry").Curry<(date?: Date, h?: number, errMod?: any) => any>;
    formatDate: (t: any) => string | number;
    formateDateToString: (date: any) => any;
    formatTime: (t: any) => string;
    getDate: (date: any) => {
        mth: string | number;
        day: any;
        year: any;
    };
    getTime: (date: any) => {
        hr: string;
        min: string;
        sec: string;
    };
    isDate: (date: any) => boolean;
    reformate: (date: any, format: never) => string;
    prepSec: (sec?: number, errorMod?: boolean) => Date | import("../errorWrapper/errorWrapper").iError;
    parse: (date?: Date, symbol?: string, mode?: string) => string;
};
