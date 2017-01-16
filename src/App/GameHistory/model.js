export default intent => {
    return intent.actions
    .filter(action => 
        action.type === 'squareFill' ||
        action.type === 'reset'
    )
    .fold((history, action) => 
        action.type === 'squareFill' ? [...history, action.payload] : []
    , [])
}