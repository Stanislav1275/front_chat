import {useHttp} from "./http.hook.js";
import ky from "ky";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message} from "../../entities/message/model/Message.js"
import {json} from "react-router-dom";

const api = ky.create({
    prefixUrl: "http://192.168.0.103:8081"
})
const {post, get} = useHttp(api);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({password, login}) => {
        console.log(password, login)
        // const requestBody = new URLSearchParams();
        // requestBody.append('client_id', 'hackathon-public');
        // requestBody.append('username', login);
        // requestBody.append('password', password);
        // requestBody.append('grant_type', 'password');
        const url = 'http://192.168.0.103:9090/auth/realms/master/protocol/openid-connect/token';
        const formData = new URLSearchParams();
        formData.append('client_id', 'hackathon-public');
        formData.append('username', login);
        formData.append('password', password);
        formData.append('grant_type', 'password');


        try {

            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        } catch (error) {
            console.error(error);
        }
    }
)
// const response = await ky.post("http://192.168.0.103:9090/auth/realms/master/protocol/openid-connect/token", {
//     json: requestBody,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
// });
export const fetchMessages = createAsyncThunk(
    "messages/fetchMessages",
    async ({id}) => {
        // const spliter = id.split(" ");
        if (id === "4328ufhn") {
            return [
                new Message(id, "Привет"),
                new Message("42323", "Привет"),
                new Message(id, "Привет"),
            ]
        }
        return []

    }
)

