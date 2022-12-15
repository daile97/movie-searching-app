import { TRENDING } from '../api/api'

const getMovie = async () => {
    const res = await fetch(TRENDING)
    if (!res.ok) {
        throw new Error('Failed to get data')
    }
    const data = await res.json()
    return data.results
}

export interface Movie {
    id: number
    title: string
    overview: string
    backdrop_path?: string
    poster_path?: string
}

export default async function Page() {
    const moviesData: Movie[] = await getMovie()
    const movies = moviesData.filter(
        (movie, index) => movie.poster_path && movie.poster_path && index < 5
    )
    return <h1>Home Page</h1>
}
