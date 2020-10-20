

export function createReducer(initialState:any, reducerMap:any) {
    return (state = initialState, action:any) => {
        const reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function checkHttpStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        throw error
    }
}

export function parseJSON(response: Response) {
    return response.json()
}