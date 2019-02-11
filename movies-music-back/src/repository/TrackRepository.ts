import { Service } from "typedi";
import { EntityRepository, Repository } from 'typeorm';
import { Film } from '../entity/Film';
import { Track } from '../entity/Track';

@Service()
@EntityRepository(Track)
export class TrackRepository extends Repository<Track> {
    findByFilm(film: Film) {
        return this.createQueryBuilder("t")
            .leftJoinAndSelect("t.licensingProcess", "lp")
            .leftJoinAndSelect("lp.song", "s")
            .where("t.film = :film", {film: film.id})
            .orderBy("t.start", "ASC")
            .getMany();
    }

    findById(id: any) {
        return this.createQueryBuilder("t")
            .leftJoinAndSelect("t.licensingProcess", "lp")
            .where("t.id = :id", {id})
            .getOne();
    }
}
