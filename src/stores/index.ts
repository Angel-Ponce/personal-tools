import { atom } from "jotai";

const currentScreen = atom<"main" | "password-manager">("main");
const openModal = atom<boolean>(false);

export { currentScreen, openModal };
