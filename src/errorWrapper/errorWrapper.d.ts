export interface iError {
    status: string;
    error: null | string;
    answer: any;
}
declare const errorWrapper: (error: any, answer: any, isActive: boolean) => iError | any;
export default errorWrapper;
