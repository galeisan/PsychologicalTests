import AsyncStorageClient from "../../utils/AsyncStorageClient";


export default class InitRepository {
    storageClient = null;
    tableName = null;

    constructor() {
        this.storageClient = new AsyncStorageClient()
        this.tableName = "Init"
    }

    getItems = () => {
        return this.storageClient.get(this.tableName)
    }

    setItems = data => {
        return this.storageClient.set(this.tableName, data)
    }

    removeItems = () => {
        return this.storageClient.removeAll(this.tableName)
    }
}