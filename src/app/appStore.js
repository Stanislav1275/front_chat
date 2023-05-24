import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from "./rootReducer.js";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};
const dateSerializer = (date) => date.toISOString();
const dateDeserializer = (str) => new Date(str);
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: {
                // Функция, определяющая, может ли значение быть сериализовано
                isSerializable: (value) => typeof value !== 'function',
                // Функция, вызываемая для сериализации значения
                serialize: (value) => (value instanceof Date ? dateSerializer(value) : value),
                // Функция, вызываемая для десериализации значения
                deserialize: (value) => (typeof value === 'string' && value.includes('T') ? dateDeserializer(value) : value),
            },
        },
    ).concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
