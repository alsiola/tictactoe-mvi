import {html} from 'snabbdom-jsx';

export default (inputProps, children) => {
    const { bsStyle, bsSize, active, disabled, className, ...props } = inputProps;

    const btnClass = getButtonClass(bsStyle, bsSize, active, disabled, className);

    return (
        <button className={btnClass} {...props}>{children}</button>
    )
}

const getButtonClass = (bsStyle, bsSize, active, disabled, className) => (
    'btn ' + 'btn-' + (bsStyle ? bsStyle + ' ' : 'default ') + (active ? ' active ' : '') + (disabled ? ' disabled ' : '') + (className ? className : '') + ' ' + getSizeClass(bsSize)
)

const getSizeClass = bsSize => {
    switch (bsSize) {
        case 'large':
            return 'btn-lg';
        case 'small':
            return 'btn-sm';
        case 'xsmall':
            return 'btn-xs';
        default:
            return ''
    }
}