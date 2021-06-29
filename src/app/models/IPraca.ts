import { IAddress } from './IAddress';
import { IPicture } from './IPicture';

export interface IPraca {
    id: number;
    name: string;
    picture: IPicture;
    location: IAddress;
}