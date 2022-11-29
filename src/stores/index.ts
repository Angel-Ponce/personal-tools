import { atom } from "jotai";

const currentScreen = atom<"main" | "password-manager">("main");

export { currentScreen };
