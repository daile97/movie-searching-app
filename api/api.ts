const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const MOVIE_BASE_API = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
export const TRENDING = MOVIE_BASE_API + '/trending/all/day?api_key=' + API_KEY
