export declare const store: {
    storageGetCrypted: (name: string, key: string, errMod?: boolean) => string;
    storageRemCrypted: (name: string, key: string, errMod?: boolean) => boolean;
    storageSetCrypted: (name: string, value: string, key: string, errMod?: boolean) => boolean;
};
