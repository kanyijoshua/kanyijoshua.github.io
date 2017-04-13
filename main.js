$(document).ready(function(){
	$('#seachForm').on('submit', (e) =>{
		let searchText=$('#searchText').val();
		getMovies(searchtext);
		e.preventDefault();
	});
});
function getMovies(searchText) {
	axios.get('http://www.omdbapi.com/?='+searchText)
		.then((response) => {
		console.log(response);
		let movies=response.data.Search;
		let output ='';
		$.each(movies,(index,movie)=>{
		output+= `
			<div class="col-md-3">
			<div class="well text-center">
			<img src="${movie.Poster}">
			<h4>${movie.Title}</h4>
			</div>
			</div>
			`;
		});
})
	.catch((err) => {
		console.log(err);
	});
}
