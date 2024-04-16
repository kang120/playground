import { create } from "zustand";

const useAppStore = create((set, get) => ({
    globalLoading: true,
    dataLoading: false,

    sidebarAlwaysOpen: true,
    sidebarOpen: null,

    title: "",

    codeBlock: null,

    setGlobalLoading: (globalLoading) => {
        set({ globalLoading: globalLoading });
    },
    setDataLoading: (dataLoading) => {
        set({ dataLoading: dataLoading });
    },

    setSidebarAlwaysOpen: (sidebarAlwaysOpen) => {
        set({ sidebarAlwaysOpen: sidebarAlwaysOpen });
    },
    toggleSidebarAlwaysOpen: () => {
        set({ sidebarAlwaysOpen: !get().sidebarAlwaysOpen });
    },
    setSidebarOpen: (sidebarOpen) => {
        set({ sidebarOpen: sidebarOpen });
    },
    toggleSidebarOpen: () => {
        set({ sidebarOpen: !get().sidebarOpen });
    },

    setTitle: (title) => {
        set({ title: title });
    },

    setCodeBlock: (codeBlock) => {
        set({ codeBlock: codeBlock });
    },
}));

export default useAppStore;
