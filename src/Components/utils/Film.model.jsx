export default class FilmModel {
    constructor(_id, title, synopsis, cast, directors, showingTimes, releaseDate, filmStatus, img) {
      this._id = _id;
      this.title = title;
      this.synopsis = synopsis;
      this.cast = cast;
      this.directors = directors;
      this.showingTimes = showingTimes;
      this.releaseDate = releaseDate;
      this.filmStatus = filmStatus;
      this.img = img;
    }
  }
  