import { head, split, toLower, curry, path, keys, forEachObjIndexed, contains, isEmpty } from 'ramda'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { isObject } from './validators'

const storeFilter = curry((selectedStore, props) => ({
  [selectedStore]: path(['store', selectedStore], props),
}))

export const connectStore = (container, store) => {
  let modelName = ''

  if (store) {
    modelName = store
  } else {
    const cname = head(split('Container', container.displayName))
    modelName = toLower(head(cname)) + cname.slice(1)
  }

  return inject(storeFilter(modelName))(observer(container))
}

export const markStates = (sobj, self) => {
  if (!isObject(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object')
  }
  const selfKeys = keys(self)

  forEachObjIndexed((val, key) => {
    if (!contains(key, selfKeys)) return false
    if (
      !isEmpty(val) &&
      !Array.isArray(val) &&
      isObject(val) &&
      self[key] !== null
    ) {
      self[key] = Object.assign(self[key], val)
    } else {
      self = Object.assign(self, { [key]: val })
    }
  }, sobj)

  return false
}
