import { Service } from "typedi";
import { EntityRepository, Repository } from 'typeorm';
import { Song } from '../entity/Song';

@Service()
@EntityRepository(Song)
export class SongRepository extends Repository<Song> {
    findByTitleLike(query: string) {
        return this.createQueryBuilder("s")
            .where("s.title like :title", {title: `%${query}%`})
            .getMany();
    }
}
