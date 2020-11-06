import { curry, and, has, pathEq } from 'ramda'
import { GraphQLClient } from 'graphql-request'
import { nilOrEmpty } from './validators'

import { GRAPHQL_ENDPOINT } from '@/config/index'

export const asyncRes = curry((key, obj) => and(obj[key], has(key, obj)))
export const asyncErr = (key) => pathEq(['error'], key)

export const makeGQClient = async (token) => {
  const headers = { sitetoken: 'Bearer sjdfgeuw3r783r2gqfdebsiurfhew9875y98435rh98hefnduh' }

  if (!nilOrEmpty(token)) {
    headers.authorization = `Bearer ${token}`
  }

  return new GraphQLClient(GRAPHQL_ENDPOINT, { headers })
}

export const later = (func, time = 200) => setTimeout(func, time);
