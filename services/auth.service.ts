import { LoginDto } from '@/types/auth';
import apiClient from './api-client';

const prefix = '/api/auth';

export const loginService = (data: LoginDto) => {
    return apiClient.post(`${prefix}/login`, data);
};

export const refreshTokenService = () => {
    return apiClient.post(`${prefix}/refresh`);
};
