import {html} from 'snabbdom-jsx';
import xs from 'xstream';
import Button from '../Bootstrap/Button';

export default model => {
    return xs.of(
        <div>
            <Button bsStyle="info" bsSize="large" className="resetButton">Reset</Button>
        </div>
    );
}
