export class DataFetcher {
    static async getData(url: string): Promise<any> {
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result;
        } catch (err) {
            throw new Error("Oops! something went wrong")
        }
    }
}