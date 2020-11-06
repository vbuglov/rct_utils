import { comStyles } from '@/utils/index'

export const getMaxWidth = (type) => {
  switch (type) {
    case 'article': {
      return comStyles.ARTICLE_PAGE_MAX_CONTENT_WIDTH
    }

    default: {
      return comStyles.MAX_CONTENT_WIDTH
    }
  }
}

export const getPadding = (type) => {
  switch (type) {
    case 'article': {
      return '0 5vw'
    }

    default: {
      return '0 1vw'
    }
  }
}
