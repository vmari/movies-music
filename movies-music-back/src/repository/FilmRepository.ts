import { Service } from "typedi";
import { EntityRepository, Repository } from 'typeorm';
import { Film } from '../entity/Film';

@Service()
@EntityRepository(Film)
export class FilmRepository extends Repository<Film> {

}
