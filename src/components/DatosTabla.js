


function DatosTabla (props){
let genero = props.movies.map((movie,i) => <li key = {movie + i}>{movie.genero}</li>)
    return(
        <>
                {props.movies.map( (movie, i) => (
                <tr key = {movie + i} className = 'tablapeli'>
                    <td>{movie.titulo}</td>
                    <td>{movie.duracion}</td>
                    <td>{movie.rating}</td>
                    <td><ul>{genero[i]}</ul></td>
                    <td>{movie.premios}</td>
                </tr>
                ))}
        </>
    )
}

export default DatosTabla;