
// import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import ContentRowMovies1 from "./ContentRowMovies1";

function ContentRowTop (){
	const Movies= [
		{
		 id:'1',
		 titulo: "Movies in Data Base",
		 cifra:21,
		 colorBorder: "border-left-primary",
		 icono: "fas fa-film fa-2x text-gray-300"
	 },
	 {
		 id:'2',
		 titulo:"Total awards",
		 cifra:79,
		 colorBorder: "border-left-success",
		 icono: "fas fa-award fa-2x text-gray-300"
	 },
	 {
		 id:'3',
		 titulo: "Actors quantity",
		 cifra:49,
		 colorBorder: "border-left-warning",
		 icono:"fas fa-user fa-2x text-gray-300"
	 }
	]	
	
return (

<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/* <!-- Content Row Movies--> */}
							
				{/* <ContentRowMovies titulo="Movies in Data Base" cifra = '21' colorBorder = "card border-left-primary shadow h-100 py-2" icono = "fas fa-film fa-2x text-gray-300" />
				<ContentRowMovies titulo="Total awards" cifra = '79' colorBorder = "card border-left-success shadow h-100 py-2" icono = "fas fa-award fa-2x text-gray-300"/>
				<ContentRowMovies titulo="Actors quantity" cifra = '49' colorBorder = "card border-left-warning shadow h-100 py-2" icono = "fas fa-user fa-2x text-gray-300" /> */}
					 <div className="row">
					{Movies.map((movie, i)=>{
					return	< ContentRowMovies1  {...movie} key = {i} />
					
					})}
					</div>
					{/* <!-- End movies in Data Base --> */}
					
	
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						{/* <!-- Last Movie in DB --> */}
					< LastMovieInDb />
						{/* <!-- End content row last movie in Data Base --> */}

						{/* <!-- Genres in DB --> */}
					< GenresInDb />
					</div>
				</div>

)
}






export default ContentRowTop;
