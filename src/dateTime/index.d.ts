export declare const dateTime: {
    addHours: (date: any, h: any) => any;
    formatDate: (t: any) => string | number;
    formateDateToString: (date: any) => any;
    formatTime: (t: any) => string;
    getDate: (date: any) => {
        mth: string | number;
        day: any;
        year: any;
    };
    isDate: (date: any) => boolean;
    reformate: (date: any, format: never) => string;
};
