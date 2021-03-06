import { generate } from 'src/app/framework/typesGenerator';
import requestsFactory from 'src/app/framework/factories/requestsFactory';

export const PREFIX = 'ERRORS_PAGE';

export default {
  ...generate({
    prefix: PREFIX,
    types: [
      'CHANGE_FIELD',
      'RESET'
    ],
  }),
  ...requestsFactory.makeTypes(PREFIX, 'FETCH_ERROR')
};
