import { AbstractRepository, EntityRepository } from 'typeorm';
import { Film } from '../entity/Film';
import { LicensingProcess } from '../entity/LicensingProcess';

@EntityRepository(LicensingProcess)
export class LicensingProcessRepository extends AbstractRepository<LicensingProcess> {
    findByFilm(film: Film) {
        return this.createQueryBuilder("lp")
        //.innerJoinAndSelect("lp.film", "f")
            .innerJoinAndSelect("lp.status", "st")
            .innerJoinAndSelect("lp.song", "s")
            .leftJoinAndSelect("lp.tracks", "t")
            .where("lp.film = :film", {film: film.id})
            /*.orderBy("lp.id", "DESC")
            .skip(5)
            .take(10)*/
            .getMany();
    }

    findOne(id: string) {
        return this.createQueryBuilder("lp")
            .innerJoinAndSelect("lp.status", "st")
            .innerJoinAndSelect("lp.song", "s")
            .where("lp.id = :id", {id})
            .getOne();
    }
}
