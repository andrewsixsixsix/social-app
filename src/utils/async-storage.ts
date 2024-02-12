import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKey } from '@/types';

const get = async (key: AsyncStorageKey) => await AsyncStorage.getItem(key);
const set = async (key: AsyncStorageKey, value: string) => await AsyncStorage.setItem(key, value);

const getAuthToken = async () => await get('AUTH_TOKEN');
const setAuthToken = async (value: string) => await set('AUTH_TOKEN', value);

export const asyncStorage = { getAuthToken, setAuthToken };
