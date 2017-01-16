import {html} from 'snabbdom-jsx';

export default (inputProps, children) => {
    const { bsStyle, bsSize, active, disabled, className, ...props } = inputProps;

    return (
        <div className={'container ' + (className ? className : '')} {...props}>{children}</div>
    )
}