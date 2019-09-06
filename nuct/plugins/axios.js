import axios from 'axios';
import qs from 'qs';

let http = axios;
// http.defaults.timeout = 10000;
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
    http,
    qs,
};
