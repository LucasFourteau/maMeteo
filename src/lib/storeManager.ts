import { Store as ReduxStore } from 'redux'

import { RootState } from '../redux/reducers'

class StoreManager {
  private reduxStore?: ReduxStore<RootState> = undefined

  private static reduxInstance: StoreManager

  public static getInstance = () => {
    if (!StoreManager.reduxInstance) {
      StoreManager.reduxInstance = new StoreManager()
    }

    return StoreManager.reduxInstance
  }

  public set store(store: ReduxStore<RootState>) {
    this.reduxStore = store
  }

  public get store() {
    if (!this.reduxStore) {
      throw Error('Store not yet configured')
    }
    return this.reduxStore
  }
}

export const storeManager = StoreManager.getInstance()
