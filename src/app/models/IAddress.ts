import { IGeo } from './IGeo';

export interface IAddress {
    address: string;
    city: string;
    country: string;
    geo: IGeo;
}
