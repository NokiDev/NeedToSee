/**
 * Created by bluedragonfly on 8/6/16.
 */

export class Movie {

    id : number;
    title : string;
    releaseDate : Date;
    overview : string;
    posterPath : string;
    backdropPath : string;
    voteAverage : number;
    voteCount : number;
    originalLanguage : string;
    originalTitle : string;
    popularity : number;

    genreIds : Array<number>;

    constructor(public data:any) {
        this.id = data.id;
        this.title = data.title;
        this.releaseDate = data.release_date;
        this.overview = data.overview;
        this.posterPath = "http://image.tmdb.org/t/p/w185/" + data.poster_path;
        this.backdropPath = "http://image.tmdb.org/t/p/w185/" + data.backdrop_path;

        this.originalLanguage = data.original_language;
        this.originalTitle = data.original_title;
        this.popularity = data.popularity;

        this.genreIds = data.genreIds;

        this.voteAverage = data.vote_average;
        this.voteCount = data.vote_count;
    }

}