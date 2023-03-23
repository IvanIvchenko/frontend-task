import { goods } from 'sampleData/goods'

export const useGoods = () => {
  const getGoodById = (id: number) => goods.find(good => good.id === id)

  return {
    goods,
    getGoodById,
  }
}