import { writable } from 'svelte/store';

export const userStore = writable<object | undefined>(undefined);
