
import {createSlice} from 'react-redux'

type Action = {
    type: string,
    payload: string
}
const reducer = (state: string, action: Action) => {
    switch(action.type) {
        case "update-current-page":
            return action.payload ?? "Feed"
    }
}