function Fruits() {
    const fruitNames = ["Melocotón", "Fresa", "Mango"]

    return (
        <>
            <h1>Listado de Frutas</h1>
            {
                fruitNames.map(
                    (item, index) => {
                        return <p key={index}>{item}</p>
                    }
                )
            }
        </>
    )
}

export default Fruits