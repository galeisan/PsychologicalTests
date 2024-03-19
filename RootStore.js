import React from "react";
import { InitStore } from "./modules/Init/InitStore";

class RootStore {
    initStore;

    constructor() {
        this.initStore = new InitStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);