


import PropTypes from 'prop-types'



function ContentRowMovies1 (props){
    // let Movies = props.movies
    
    return (
       
        <div  className="col-md-4 mb-4"> 
        <div className={`card ${props.colorBorder} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                    </div>
                    <div className="col-auto">
                        <i className={props.icono}></i>
                    </div>
                </div>
            </div>
        </div>
     </div>
   
    )
        
    
    
}
ContentRowMovies1.defaultProps = {
titulo:'debes escribir un titulo',
colorBorder: 'debes escribir un clase',
cifra: 0 ,
icono: 'border-lef-primary'
}
ContentRowMovies1.propTypes = {
    
        titulo : PropTypes.string.isRequired,
        colorBorder: PropTypes.string.isRequired,
        cifra: PropTypes.number.isRequired,
        icono: PropTypes.string.isRequired
    
    }
    
export default ContentRowMovies1;

