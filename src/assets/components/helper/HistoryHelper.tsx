import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigate = (url: string): void =>{
    history.push(url);
};
