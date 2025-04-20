function Heading({ size, children }) {
    const style = { fontSize: "48px" }
    if (size) {
        switch (size) {
            case 1:
                style.fontSize = '48px'
                break;
            case 2:
                style.fontSize = '32px'
                break;
            case 3:
                style.fontSize = '24px'
                break;
            case 4:
                style.fontSize = '16px'
                break;
            case 5:
                style.fontSize = '12px'
                break;
        }
    }
    return (
        <>
        <h1 style={style}>
            {children}
        </h1>
        </>
    )

}

export default Heading;
