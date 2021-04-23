import { Dispatch } from 'react';

export type AsyncDispatch<T> = Dispatch<T | Promise<T>>