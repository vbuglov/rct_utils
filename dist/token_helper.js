import CacheStore from './cache_store'

export const isServerSide = typeof window === 'undefined'
export const isClientSide = !isServerSide
export const getJwtToken = (props) =>
  isServerSide
    ? CacheStore.cookie.from_req(props.req, 'jwtToken')
    : CacheStore.get('token')
