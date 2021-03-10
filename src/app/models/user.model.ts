export interface User {
    Id: number;
    Name: string;
    Username: string;
    Email: string;
    Address: {
        Street: string;
        Suite: string;
        City: string;
        Zipcode: string;
        Geo: {
        Lat: string;
        Lng: string;
        }
    };
    Phone: string;
    Website: string;
    Company: {
        Name: string;
        CatchPhrase: string;
        Bs: string;
    }
}
