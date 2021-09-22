import { Album } from "src/app/album/model/album";
import { ILibraryObject } from "src/app/shared/interface/iLibrary-object";

export class Genre implements ILibraryObject {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    albums?: Album[]

    constructor(genreID: string, name: string, createdAt: string, updatedAt: string, albums?: Album[]) {

        this.id = genreID;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        albums ? this.albums = albums : null;
    }
}