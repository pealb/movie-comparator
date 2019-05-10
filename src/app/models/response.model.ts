import { IMovie } from './movie.model';

export interface IResponse {
    Search: IMovie[],
    totalResults: number,
    Response: boolean
}