import { Artist } from "src/app/artist/model/artist";
import { Genre } from "src/app/genre/model/genre";
import { ILibraryObject } from "src/app/shared/interface/iLibrary-object";

export class Album implements ILibraryObject {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    artist: Artist | undefined;
    genre: Genre | undefined;

    constructor(albumID: string, name: string, createdAt: string, updatedAt: string, albumArtist?: Artist, albumGenre?: Genre) {

        this.id = albumID;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.artist = albumArtist;
        this.genre = albumGenre;
    }
}