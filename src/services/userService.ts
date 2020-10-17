export const register=(request :any)=> {

    const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';

    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    };
    return fetch(REGISTER_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
}

export const login = (request:any) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:3000/api/v1/login';
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    };

    return fetch(LOGIN_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};