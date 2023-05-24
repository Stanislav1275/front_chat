import {useState} from "react";
import ky from "ky";

export const useHttp = (keyWithPrefix) => {
    // const [process, setProcess] = useState("waiting");


// Обертка для GET запроса
    async function get(url, params = {}) {
        return await request('get', url, params);
    }

// Обертка для POST запроса
    async function post(url, body = {}, params = {}) {

        return await request('get', url, params);
    }
    async function request(method, url,  params = {}) {
        // setProcess('loading');
        try {
            const response = await keyWithPrefix[method.toLowerCase()](url, {searchParams: params });
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            // setProcess("access")
            return response.json();
        } catch (error) {
            // setProcess('error');
            console.error(method + ' request failed:', error);
            throw error;
        }
    }
    const postWithAuth = async (baseUrl, json, accessToken) => {
        try {
            const response = await keyWithPrefix.get(`${baseUrl}`, {
                json,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return {post, get, request, postWithAuth}
}
