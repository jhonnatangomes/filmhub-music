export default class LocalStorage {
    setValue(key, value) {
        let obj;
        const appLocalStorage = localStorage.getItem("filmhub-music");
        if (appLocalStorage) {
            const parsedData = JSON.parse(appLocalStorage);
            obj = { ...parsedData, [key]: value };
        } else {
            obj = { [key]: value };
        }

        const stringifiedObj = JSON.stringify(obj);
        localStorage.setItem("filmhub-music", stringifiedObj);
    }

    getValue(key) {
        const parsedData = JSON.parse(localStorage.getItem("filmhub-music"));
        if (!parsedData) {
            return null;
        }
        return parsedData[key];
    }
}
