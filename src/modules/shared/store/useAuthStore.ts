import { create } from "zustand";
import { logger } from "./logger";

interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState["isAuthenticated"]) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
        // TODO: Save Token
      },
    }),
    "authStore"
  )
);

export default useAuthStore;
