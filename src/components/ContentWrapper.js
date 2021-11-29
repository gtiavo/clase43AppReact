import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Tabla from "./Tabla";
import DatosTabla from './DatosTabla'

function ContentWrapper() {

const Movies = [
  {
  id: 1, 
  titulo : 'Billy Elliot',
  duracion : 123,
  rating : 5,
  genero : ['Drama', 'Comedia'],
  premios : 2
},
{
  id: 2, 
  titulo : 'Alicia en el país de las maravillas',
  duracion : 142,
  rating : 4.8,
  genero : ['Drama', 'Acción' ,'Comedia'],
  premios : 3
}
]

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <TopBar />
            <ContentRowTop />
          
        </div>
        <Tabla >
          < DatosTabla movies = {Movies} />
        </Tabla>
        <Footer />
      </div>
    </div>
  );
}

export default ContentWrapper;
