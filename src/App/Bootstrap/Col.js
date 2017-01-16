import {html} from 'snabbdom-jsx';

const sizes = ['xs', 'sm', 'md'];

export default (inputProps, children) => {
    const { xs, sm, md, xsOffset, smOffset, mdOffset, className, ...props } = inputProps;

    const layoutClasses = 
    [xs, sm, md].map((size, i) => {
        if (size) {
            return 'col-' + sizes[i] + '-' + size;
        }
    }).concat(
        [xsOffset, smOffset, mdOffset].map((sizeO, i) => {
            if (sizeO) {
                return 'col-' + sizes[i] + '-offset-' + sizeO;
            }
        })
    )
    .join(' ');

    const cname = (className ? className : '')  + ' ' + layoutClasses;

    return (
        <div className={cname} {...props}>{children}</div>
    )
}