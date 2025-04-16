type IOptions = {
  page?: number,
  limit?: number,
  sortOrder?: string,
  sortBy?: string
}
type IOptionsResult = {
  page: number,
  limit: number,
  skip: number,
  sortOrder: string,
  sortBy: string
}

export const calculatePagination = (option: IOptions): IOptionsResult => {
  const page: number = Number(option.page) || 1
  const limit: number = Number(option.limit) || 10
  const skip: number = (Number(page) - 1) * limit
  const sortBy: string = option.sortBy || 'createdAt'
  const sortOrder: string = option.sortOrder || 'desc'
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  }
}