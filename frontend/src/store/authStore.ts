// authStore.ts
import {create} from 'zustand';

interface AuthState {
    isAuthorized: boolean | null;
    setIsAuthorized: (value: boolean | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthorized: null,
    setIsAuthorized: (value) => set({ isAuthorized: value }),
}));

export default useAuthStore;