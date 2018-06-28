const logger =(store) => (next) => (action) => {
    console.group(action.type)
        console.log("The action", action )
        const returnValue = next(action)
        console.log("The New state is", store.getState())
    console.grounpEnd()
    return returnValue
}

export default logger