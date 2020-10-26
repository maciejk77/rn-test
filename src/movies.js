export class Movies {
  static async search(keyword) {
    const apiKey = '29e8bd44b5996509ceca4756dda53712';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&query=${keyword}`;
    const response = await fetch(url);
    const movies = await response.json();
    if (!movies.results) return [];
    const sortedMovies = movies.results.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return sortedMovies;
  }
}
