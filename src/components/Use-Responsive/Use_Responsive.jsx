import useResponsive from "./useResponsive";

function Use_Responsive() {

    const winSize = useResponsive();
    const { width, height } = winSize;

    return (
        <div>
        <h1>Use Responsive Custom Hook </h1>
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
        </div>
    )

}

export default Use_Responsive;