import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AsyncStorageClient {
    get = async (tableName) => {
        const value = await AsyncStorage.getItem(tableName)
        if (value !== undefined && value !== null) {
            return value === "true"
        }
        else return true
    }

    set = async (tableName, data) => {
        return AsyncStorage.setItem(tableName, data.toString())
    }

    removeAll = async (tableName) => {
        return AsyncStorage.removeItem(tableName)
    }
}