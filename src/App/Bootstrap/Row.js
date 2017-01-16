import {html} from 'snabbdom-jsx';

export default (inputProps, children) => {
    const { bsStyle, bsSize, active, disabled, className, ...props } = inputProps;

    return (
        <div className={'row ' + (className ? className : '')} {...props}>{children}</div>
    )
}