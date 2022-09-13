import crypto from 'crypto';
import axios from 'axios';

const apiUrl = 'https://api.podcastindex.org/api/1.0';
const clientUserAgent = 'podcastdx client/5.0';
const apiVersion = '1.0';
const authApi = 'BSF8RLDX4MB7XVEQKR3D';
const secretKey = 'WVf3ENMTwZcS8d#vwxcv3tubJKwxUzxhupuyU8h3';
const apiHeaderTime = Math.floor(Date.now() / 1000);
const sha1Algorithm = 'sha1';
const sha1Hash = crypto.createHash(sha1Algorithm);
const data4Hash = authApi + secretKey + apiHeaderTime;
sha1Hash.update(data4Hash);
const hash4Header = sha1Hash.digest('hex');

const HEADERS = {
  'Content-Type': 'application/json',
  'X-Auth-Date': `${apiHeaderTime}`,
  'X-Auth-Key': authApi,
  Authorization: hash4Header,
  'User-Agent': `${clientUserAgent}/${apiVersion}`,
};

const APIClient = axios.create({
  baseURL: apiUrl,
  headers: HEADERS,
});

export default APIClient;
