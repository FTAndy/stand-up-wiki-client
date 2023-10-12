import { create } from 'zustand'
import { Comedian } from '../types/comdian'

interface GlobalState {
  currentComedian: Comedian| null
  setCurrentComedian: (comedian: Comedian) => void
}

const useBearStore = create<GlobalState>()((set) => ({
  currentComedian: null,
  setCurrentComedian: (comedian) => {
    set((state) => {
      return {
        currentComedian: comedian
      }
    })
  }
}))
