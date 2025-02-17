export const isObject = (target: unknown) =>
  target && typeof target === 'object';

export interface MergeObject {
  [key: string]: any;
}

export const renameProp = (
  oldProp: string,
  newProp: string,
  { [oldProp]: old, ...others }
) => ({
  [newProp]: old,
  ...others
});

// copy an object without reference
export const copyObject = (obj: any) => {
  if (!isObject(obj)) return obj;
  if (obj instanceof Array) return [...obj];
  return { ...obj };
};

// copy an object omit some keys
export const omitObject = (obj: any, omitKeys: string[]) => {
  if (!isObject(obj)) return obj;
  if (obj instanceof Array) return [...obj];
  const newObj = { ...obj };
  omitKeys.forEach((key) => newObj[key] && delete newObj[key]);
  return newObj;
};
