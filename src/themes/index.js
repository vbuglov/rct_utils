import { split, path, map } from 'ramda'
import skins from './skins'

export const themeSkins = { ...skins }

export const themeCoverMap = map(path(['cover']), themeSkins)
export const themeCoverIndexMap = map(path(['coverIndex']), themeSkins)

export const theme = (themepath) =>
  path(['theme', ...split('.', themepath)]) || 'main'
export { default as themes } from './themes';

export { getMaxWidth, getPadding } from './utils'
