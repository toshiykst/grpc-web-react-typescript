import { capitalizeFirstLetter } from "utils/string";

export const setRequestParams = (params: any, request: any) => {
  Object.keys(params).forEach((key) => {
    const setterName = `set${capitalizeFirstLetter(key)}`;
    if (setterName in request) {
      request[setterName](params[key]);
      return;
    }
    throw new Error(`${setterName} does not exists`);
  });
};
