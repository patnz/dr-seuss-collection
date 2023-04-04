import * as Models from '../../common/models'

export const RATE_BOOK = 'RATE_BOOK'

export type UserAction = { type: typeof RATE_BOOK; payload: number }

export function rateBook(rating: number): UserAction {
  return {
    type: RATE_BOOK,
    payload: rating,
  }
}
