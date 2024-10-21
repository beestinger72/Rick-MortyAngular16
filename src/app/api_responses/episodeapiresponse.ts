import { PagingInfo } from './paginginfo';
import { Episode } from './episode';

export class EpisodeApiResponse {
    info: PagingInfo;
    results: Episode[];
}
