import _ from 'lodash';
import { PreparedData } from '../models/models';

export const sortObjects = (
  ary: PreparedData[],
  field: string,
  ascending: boolean
) => {
  const order = ascending ? 'asc' : 'desc';
  return _.orderBy(ary, [field], [order]);
};
