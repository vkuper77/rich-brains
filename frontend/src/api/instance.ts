import {BASE_URL} from "./config"
import {FetchConstructor} from "../modules/fetch"
export const instance = new FetchConstructor(BASE_URL)
