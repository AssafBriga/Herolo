export class Movie {
    id: number;
    title: string;
    year: number;
    runtime: string;
    genre: string;
    director: string;

    static nextId:number = 0;
    static getId(){
        this.nextId++
        return this.nextId
    }


    constructor(title:string, year:number, runtime:string, genre:string, director:string,) {
        this.id = Movie.getId();
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
}
