import { HttpErrorResponse } from "@angular/common/http";

export function handleHttpError(err: HttpErrorResponse): string {

    console.error(err);

    switch (err.status) {

        case 404:
            return `${err.status}: Item not found/ does not exist.`
        case 400:
            return `${err.status}: Invalid request. One or more fields may contain incorrect values.`;
        case 500:
            return `${err.status}: A server error occured. Please try`
        default:
            return `An unkown error has occured.`
    }
}