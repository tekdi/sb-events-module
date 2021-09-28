export declare class SuiProgress {
    readonly hasClasses: boolean;
    private _value;
    private _maximum;
    private _precision;
    private _overrideSuccess;
    autoSuccess: boolean;
    showProgress: boolean;
    value: number;
    maximum: number;
    precision: number;
    readonly reachedMaximum: boolean;
    readonly percentage: string;
    classValue: string;
    constructor();
}
