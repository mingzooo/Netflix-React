import axios from "axios";

const DOMAIN = "http://localhost:3000";

async function request(method, url, data) {
    console.log(DOMAIN + url);
    console.table(data);
    return await axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export { request };