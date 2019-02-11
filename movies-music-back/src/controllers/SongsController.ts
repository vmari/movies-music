import { Song } from '../entity/Song';
import { SongRepository } from '../repository/SongRepository';
import { getCustomRepository, getManager, Repository } from 'typeorm';
import { Authorized, BodyParam, Delete, Get, JsonController, Param, Post, QueryParam } from 'routing-controllers';

@JsonController("/song")
export class SongsController {

    @Get("s/search")
    async searchSong(@QueryParam("query") query: string) {
        return await getCustomRepository(SongRepository).findByTitleLike(query);
    }

    @Post("/")
    async createSong(@BodyParam("song") song: Song) {
        return await getCustomRepository(SongRepository).save(song);
    }

    @Get("/:id")
    async getSong(@Param("id") id: string) {
        return await getCustomRepository(SongRepository).findOne(id);
    }

    @Delete("/:id")
    async deleteSong(@Param("id") id: string) {

        return await getCustomRepository(SongRepository).findOne(id);
    }

}
