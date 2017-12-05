import { API_URL } from 'src/app/settings/constants';

export function getUrl(_url) {
  const url = `${API_URL}/${_url}`;
  return url;
}
