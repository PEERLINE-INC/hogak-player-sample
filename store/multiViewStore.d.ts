import { MultiViewSource } from '../components/HogakPlayer/interfaces';

interface MultiViewState {
    multiViewSources: MultiViewSource[];
    setMultiViewSources: (multiViewSources: MultiViewSource[]) => void;
}
declare const useMultiViewStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<MultiViewState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<MultiViewState, MultiViewState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: MultiViewState) => void) => () => void;
        onFinishHydration: (fn: (state: MultiViewState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<MultiViewState, MultiViewState>>;
    };
}>;
export default useMultiViewStore;
