export declare const generator: {
    aooFactory: (snapshot: any[], amount: number, errorMod?: boolean) => import("../errorWrapper/errorWrapper").iError | Object[] | undefined;
    arrayGenerator: (reserve: number) => any;
    objectGenerator: (reserve: number) => any;
    random: (max?: number) => number;
    randomElement: (reserve: number) => any;
};
