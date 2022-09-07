const API_KEY='0926b88f91b00d9e715c75f7be5f4a76';
const url='https://api.themoviedb.org/3/search/movie?api_key=0926b88f91b00d9e715c75f7be5f4a76';
const IMAGE_URL='https://image.tmdb.org/t/p/w500';

function generateUrl(path){
    const url=`https://api.themoviedb.org/3${path}?api_key=0926b88f91b00d9e715c75f7be5f4a76`;
    return url;
}

function requestMovies(url,onComplete,onError) {
    fetch(url)
    .then((res)=>res.json())
    .then(onComplete)
    .catch(onError);
}

function searchMovie(value){
    const path='/search/movie';
    const url=generateUrl(path)+'&query='+value;
    requestMovies(url,renderSearchMovie,handleError);

}

function getUpcomingMovies(){
    const path='/movie/upcoming';
    const url=generateUrl(path);
    const render=renderMovie.bind({title:'Upcoming Movies'});
    requestMovies(url,render,handleError);

}

function getTopRatedMovies(){
    const path='/movie/top_rated';
    const url=generateUrl(path);
    const render=renderMovie.bind({title:'Top Rated Movies'});
    requestMovies(url,render,handleError);

}

function getPopularMovies(){
    const path='/movie/popular';
    const url=generateUrl(path);
    const render=renderMovie.bind({title:'Popular Movies'});
    requestMovies(url,render,handleError);

}