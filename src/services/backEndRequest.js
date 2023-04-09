const baseUrl = 'http://localhost:5000';

const request = async (method, url, data, navigateCallback) => {
    try {
        const authToken = localStorage.getItem('authToken');

        let headers = {};

        if (authToken) {
            headers['authToken'] = authToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(baseUrl + url, { headers });
        } else {
            buildRequest = fetch(baseUrl + url, {
                method,
                credentials: 'include',
                headers: {
                    ...headers,
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        }
        const response = await buildRequest;
        const result = await response.json();

        if (response.url === 'http://localhost:5000/api/auth/login' && (response.status === 403 || response.status === 401)) {
            throw new Error(result.message);
        }

        if (response.status === 403 || response.status === 401) {
            return navigateCallback('/auth/login');
        }

        if (response.status === 304) {
            throw new Error('Something went wrong!');
        }

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');
