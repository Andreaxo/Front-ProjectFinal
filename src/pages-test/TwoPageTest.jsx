import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0'};

export const TwoPageTest = () => {
    return(
        <>
        <h1>02 - Forma con Grids (antd)</h1>
        <div className="container">
            <Divider orientation='left'>Este es un Divider</Divider>  
            <Row gutter={{ xs: 8, sm: 16, md: 24}}> 
                <Col className='gutter-row' span={6}>
                    <div style={style}>Col-6</div>
                </Col>
                <Col className='gutter-row' span={6}>
                    <div style={style}>Col-7</div>
                </Col>
                <Col className='gutter-row' span={6}>
                    <div style={style}>Col-8</div>
                </Col>
                <Col className='gutter-row' span={6}>
                    <div style={style}>Col-9</div>
                </Col>
            </Row>

        </div>
        </>
    
    )
}