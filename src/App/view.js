import { html } from 'snabbdom-jsx';
import Grid from './Bootstrap/Grid';
import Row from './Bootstrap/Row';
import Col from './Bootstrap/Col';

export default model => {
    return model
    .map(state => (
        <Grid>
            <Row>
                <Col xs={12} className='text-center'>                
                    <h1>Tic Tac Toe MVI</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='text-center'>                
                    {state.gridVtree}
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12}> 
                    {state.controlsVtree}
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12}> 
                    <h2>{state.winner}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='text-center'> 
                    {state.history}
                </Col>
            </Row>
        </Grid>
    ));
} 