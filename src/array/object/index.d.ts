export declare const AOO: {
    finderList: (array: any[], key: string, errorMod?: boolean) => any[];
    findValues: (array: any[], key: string, errorMod?: boolean) => string[] | null;
    paths: (collection: any, keys: any[], errorMod?: boolean) => any;
    update: (aoo: any[], param: Number | import("./update").iAooParam, obj: any, errorMod?: boolean) => any[];
    pUpdate: (collection: any, keys: any[], newData: any, errorMod?: boolean) => any;
    factory: (snapshot: any[], amount: number) => any[];
};
