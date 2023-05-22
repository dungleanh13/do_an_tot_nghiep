import axios, {AxiosInstance} from 'axios';

class ClientNetwork {
    client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8080",
            responseType: 'json',
            timeout: 60000,
        });
        this.configRequest()
    }

    configRequest = () => {
        this.client?.interceptors.request.use(
            (request: any) => {
                return request;
            },
            error => {
                return error;
            },
        );

        this.client?.interceptors.response.use(response => {
                return response;
            }, async error => {
                throw error;
            },
        );
    }

    post(endpoint: string, mParams: any, config: any) {
        return this.client?.post(endpoint, mParams, config);
    }

    put(endpoint: string, mParams?: any, config?: any) {
        return this.client?.put(endpoint, mParams, config);
    }

    get(endpoint: string, config: any) {
        return this.client?.get(endpoint, config);
    }

    delete(endpoint: string, config: any) {
        return this.client?.delete(endpoint, config);
    }
}

export default ClientNetwork;
