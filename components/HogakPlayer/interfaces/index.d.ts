export declare class MultiViewSource {
    thumbnailUrl: string;
    title: string;
    url: string;
    constructor(thumbnailUrl: string, title: string, url: string);
}
export type HogakPlayerProps = {
    title?: string;
    isPlay?: boolean;
    setIsPlay?: (isPlay: boolean) => void;
    url: string;
    width?: number;
    height?: number;
    multiViewSources?: MultiViewSource[];
};
