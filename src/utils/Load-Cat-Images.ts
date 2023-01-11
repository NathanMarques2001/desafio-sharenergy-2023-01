export function LoadCatImage(httpCode: number): string {
    return `https://http.cat/${httpCode}`;
}

export function NotFoundCat(httpCode: number): boolean {
    if (httpCode < 100 ||
        httpCode > 103 && httpCode < 200 ||
        httpCode === 205 ||
        httpCode > 207 && httpCode < 300 ||
        httpCode === 306 ||
        httpCode > 308 && httpCode < 400 ||
        httpCode === 419 ||
        httpCode > 426 && httpCode < 429 ||
        httpCode === 430 ||
        httpCode > 431 && httpCode < 444 ||
        httpCode > 444 && httpCode < 450 ||
        httpCode > 451 && httpCode < 497 ||
        httpCode === 505 ||
        httpCode > 511 && httpCode < 521 ||
        httpCode === 524 ||
        httpCode > 525 && httpCode < 599 ||
        httpCode > 599) 
        {
         return true;
    }
    return false;
}
