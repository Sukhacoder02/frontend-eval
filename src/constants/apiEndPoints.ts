const BASE_URL = 'http://localhost:8000/api';

const EVENTS = '/events';
const THEMES = '/themes';

const GET_ALL_EVENTS = {
  url: `${BASE_URL}${EVENTS}`,
  method: 'get',
};

const GET_SINGLE_EVENT = (eventId: string) => {
  return {
    url: `${BASE_URL}${EVENTS}/${eventId}`,
    method: 'get',
  };
};

const PATCH_SINGLE_EVENT = (eventId: string) => {
  return {
    url: `${BASE_URL}${EVENTS}/${eventId}`,
    method: 'patch',
  };
};

const GET_THEMES = {
  url: `${BASE_URL}${THEMES}`,
  method: 'get',
};

const PUT_THEME = {
  url: `${BASE_URL}${THEMES}`,
  method: 'put',
};

export { BASE_URL, GET_ALL_EVENTS, GET_SINGLE_EVENT, PATCH_SINGLE_EVENT, GET_THEMES, PUT_THEME };
