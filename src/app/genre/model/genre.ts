import { ILibraryObject } from "src/app/shared/interface/iLibrary-object";

export class Genre implements ILibraryObject {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;

    constructor(genreID: string, name: string, createdAt: string, updatedAt: string) {

        this.id = genreID;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}