import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import filtersReducer from './filtersSlice'
import contactsReducer from './contactsSlice'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'contactsItems',
  storage,
  whitelist: ['items'],
}

const pContactsReducer = persistReducer(config, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
