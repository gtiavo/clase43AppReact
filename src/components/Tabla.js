

function Tabla (props){
    return(
        <>
            <table className = 'tablapeli' >
              <tbody>  
                <tr >
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
                    {props.children}
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabla;

