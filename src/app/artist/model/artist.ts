import { ILibraryObject } from "src/app/shared/interface/iLibrary-object";

export class Artist implements ILibraryObject {

    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    albums: any[] | undefined;

    constructor(artistID: string, name: string, createdAt: string, updatedAt: string, albums?: any[]) {

        this.id = artistID;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.albums = albums;
    }
}