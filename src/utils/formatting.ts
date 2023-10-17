import {
  camelCase,
  kebabCase,
  pascalCase,
  snakeCase
} from 'case-anything';

export type CaseType =
  | 'camel'
  | 'kebab'
  | 'snake'
  | 'pascal';

/**
 *
 * @param str
 * @param caseType CaseType
 * @returns formatted string
 * @description normalizes input to a given case format.
 */
export const normalizeToCase = (
  str: string,
  caseType: CaseType = 'kebab',
) => {
  switch (caseType) {
    case 'camel':
      return camelCase(str);
    case 'kebab':
      return kebabCase(str);
    case 'pascal':
      return pascalCase(str);
    case 'snake':
      return snakeCase(str);
    default:
      throw new Error(`Case type ${caseType} is not supported.`);
  }
};

export const formatString = (str: string) => {
  return str.split('').reduce((content, char) => {
    if (char === '(' || char === ')' || char === '[' || char === ']') {
      return `${content}\\${char}`;
    }
    return `${content}${char}`;
  }, '');
};
