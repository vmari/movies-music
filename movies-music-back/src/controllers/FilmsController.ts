import {
    JsonController,
    Get,
    Post,
    BodyParam,
    Authorized, NotFoundError, QueryParam, Delete, State
} from 'routing-controllers';
import { Film } from '../entity/Film';
import { getCustomRepository, getManager } from 'typeorm';
import { Song } from '../entity/Song';
import { LicensingProcess } from '../entity/LicensingProcess';
import { LicensingProcessRepository } from '../repository/LicensingProcessRepository';
import { LicensingProcessStatus } from '../entity/LicensingProcessStatus';
import { FilmRepository } from '../repository/FilmRepository';
import { TrackRepository } from '../repository/TrackRepository';
import { Track } from '../entity/Track';

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

@Authorized()
@JsonController("/film")
export class SongsController {

    @Get("s")
    async getAllFilms() {
        return await getCustomRepository(FilmRepository).find();
    }

    @Post("/")
    async createFilm(@BodyParam("film") film: Film) {
        return await getCustomRepository(FilmRepository).save(film);
    }

    @Get("/:id")
    async getFilm(@QueryParam("id") id: string) {
        const film = await getCustomRepository(FilmRepository).findOne(id);

        // worflow hardcodeado para la dema.
        // La idea es que cada film tenga un workflow asignado dependiendo del tipo, y que éste determine
        // la forma en la que cada licensing process sufra un cambio.
        film.workflow = await getManager().getRepository(LicensingProcessStatus).find();

        return {
            status: true,
            film: film
        };
    }

    @Get("/:id/songs")
    async getFilmSongs(@QueryParam("id") id: string) {

        const film = await getCustomRepository(FilmRepository).findOne(id);

        if (!film) {
            throw new NotFoundError();
        }

        const songs = await getCustomRepository(LicensingProcessRepository).findByFilm(film);

        return {
            status: true,
            songs: songs
        };
    }

    @Get("/:id/tracks")
    async getFilmTracks(@QueryParam("id") id: string) {

        const film = await getManager().getRepository(Film).findOne(id);

        if (!film) {
            throw new NotFoundError();
        }

        const tracks = await getCustomRepository(TrackRepository).findByFilm(film);

        return {
            status: true,
            tracks: tracks
        };
    }

    @Post("/:id/track")
    async createTrack(@QueryParam("id") id: string, @BodyParam("track") track: Track) {

        const film = await getManager().getRepository(Film).findOne(id);

        if (!film) {
            throw new NotFoundError();
        }

        track.film = film;

        return {
            status: true,
            track: await getManager().save(track)
        };
    }

    @Post("/:id/licensingProcess")
    async createSong(@QueryParam("id") id: string, @BodyParam("licensingProcess") licensingProcess: LicensingProcess) {

        // Validate film
        const film: Film = await getManager().getRepository(Film).findOne(id);

        if (!film) {
            throw new Error('Film not found');
        }

        let song: Song = new Song();
        song.title = licensingProcess.song.title;
        song.artist = licensingProcess.song.artist;
        song.duration = licensingProcess.song.duration;
        song.genre = licensingProcess.song.genre;
        let existentSong: Song = await getManager().save(song);

        // Validate status
        const status: LicensingProcessStatus = await getManager()
            .getRepository(LicensingProcessStatus).findOne(licensingProcess.status.id);

        if (!status) {
            throw new Error('Status not found');
        }

        if (!licensingProcess.tracks || licensingProcess.tracks.length == 0) {
            throw new Error('You must select one track at least');
        }

        // Validate tracks
        let tracks: Track[] = [];

        await asyncForEach(licensingProcess.tracks, async track => {
            let existentTrack: Track = await getCustomRepository(TrackRepository).findById(track.id);

            if (!existentTrack) {
                throw new Error(`Track ${track.id} not found`);
            }

            if (existentTrack.licensingProcess != null) {
                throw new Error(`Track ${existentTrack.reel}m${existentTrack.cueNumber} already has a song associated`);
            }

            tracks.push(existentTrack);
        });


        let newLicensingProcess: LicensingProcess = new LicensingProcess();

        newLicensingProcess.film = film;
        newLicensingProcess.tracks = tracks;
        newLicensingProcess.song = existentSong;
        newLicensingProcess.status = status;
        newLicensingProcess.flags = 0;

        return {
            status: true,
            licensingProcess: await getManager().save(newLicensingProcess)
        };
    }

    @Post("/:id/track/:idTrack")
    async updateTrack(@QueryParam("id") id: string, @QueryParam("idTrack") idTrack: string) {
        return {
            status: true
        };
    }

    @Delete("/:id/track/:idTrack")
    async removeTrack(@QueryParam("id") id: string, @QueryParam("idTrack") idTrack: string) {
        return {
            status: true
        };
    }
}
