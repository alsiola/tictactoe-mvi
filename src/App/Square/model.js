
export default (intent, props) => {   

    const className = props.number % 3 != 0 ? 'square' : 'square colstart';

    return intent.gridActions
    .filter(action =>
        action.type === 'squareFill' && action.payload.number === props.number ||
        action.type === 'reset'
    ).map(action =>
        Object.assign({ className }, { letter: action.type === 'reset' ? '' : action.payload.letter})
    ).startWith({
        className,
        letter: ''
    });
}