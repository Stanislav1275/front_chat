export const isLoggedIn = (state) => state.auth.isLoggedIn
export const ID = (state) => state.auth?.user.id.split(" ")[1]
export const NONSERIALIZABLE_ID = (state) => state.auth?.user.id
export const role = (state) => state.auth?.user.id.split(" ")[0]
