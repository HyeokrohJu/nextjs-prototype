/**
 * .env 환경 설정 값
 */
const configs: Configs = {
  API_BASEURL: process.env.API_BASEURL || '',
};

export interface Configs {
  API_BASEURL: string;
}

export default configs;
