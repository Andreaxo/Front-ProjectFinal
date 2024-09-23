import { Grid } from "antd"

const { useBreakpoint } = Grid; // Importa las dimensiones, ya no hay necesidad de establecerlas

export const FourthPageTest = () => {
    const screens = useBreakpoint();

    return(
        <>
        <h1>Esta es el 04 - CSS</h1>
        <div style={{ backgroundColor: screens.md ? "lightblue" : "lightgreen"}}>
            {screens.md ? <p>Medium screen or larger</p> : <p>Small Screen</p>}
        </div>
        </>
    )
}