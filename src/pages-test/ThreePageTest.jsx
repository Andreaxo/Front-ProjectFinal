import { Button } from "antd"
import { useMediaQuery } from 'react-responsive';

export const ThreePageTest = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
    return(
        <>
        <h1>Esta es el 03 - Responsive React</h1>

        <div>
            <Button type="primary" style={{ width: isMobile ? '100%' : 'auto'}}>
             {isMobile ? 'Mobile Button' : 'Desktop Button'}
            </Button>
        </div>
        </>
    )
}