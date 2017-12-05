import { generate } from 'src/app/framework/typesGenerator';

export const postfixes = {
  REQUESTED: '_REQUESTED',
  SUCCEED: '_SUCCEED',
  FAILED: '_FAILED'
};

export function makeTypes(prefix, type) {
  return generate({
    prefix,
    types: [
      `${type}`,
      `${type}${postfixes.REQUESTED}`,
      `${type}${postfixes.SUCCEED}`,
      `${type}${postfixes.FAILED}`
    ]
  });
}
