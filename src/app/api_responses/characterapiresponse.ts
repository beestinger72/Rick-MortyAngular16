import { Character } from './character';
import { PagingInfo } from './paginginfo';

export class CharacterApiResponse {
    info: PagingInfo;
    results: Character[];
}
