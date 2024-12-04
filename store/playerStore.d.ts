interface PlayerState {
    url: string;
    setUrl: (url: string) => void;
    title: string;
    setTitle: (title: string) => void;
    pip: boolean;
    setPip: (pip: boolean) => void;
    isPlay: boolean;
    setIsPlay: (isPlay: boolean) => void;
    isSeek: boolean;
    setIsSeek: (isSeek: boolean) => void;
    duration: number;
    setDuration: (duration: number) => void;
    played: number;
    setPlayed: (played: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    isShowMultiView: boolean;
    setIsShowMultiView: (isShowMultiView: boolean) => void;
}
declare const usePlayerStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<PlayerState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<PlayerState, PlayerState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: PlayerState) => void) => () => void;
        onFinishHydration: (fn: (state: PlayerState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<PlayerState, PlayerState>>;
    };
}>;
export default usePlayerStore;
