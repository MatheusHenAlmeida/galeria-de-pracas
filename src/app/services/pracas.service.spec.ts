import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PracasService } from './pracas.service';
import { environment } from '../../environments/environment';
import { IPraca } from '../models/IPraca';

describe('UserService', () => {
  let service: PracasService;
  let httpMock: HttpTestingController;
  const USER_URL = environment.user_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracasService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PracasService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must return list of users', () => {
    const mockedList = [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        }
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    }];

    service.getPracas().subscribe((data: IPraca[]) => {
      expect(data.length).toBe(2);
      expect(data[0].name).toBe('Leanne Graham');
      expect(data[1].name).toBe('Ervin Howell');
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });

  it('must return empty list', () => {
    const mockedList = [];

    service.getPracas().subscribe((data: IPraca[]) => {
      expect(data.length).toBe(0);
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });

  it('must return a specific user', () => {
    const mockedList = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    }

    service.getPraca(1).subscribe((data: IPraca) => {
      expect(data.id).toBe(1);
      expect(data.name).toBe('Leanne Graham');
    });
    const req = httpMock.expectOne(USER_URL + '/1');
    req.flush(mockedList);
  });

  it('must return no user', () => {
    let mockedList = null;

    service.getPracas().subscribe((data: IPraca) => {
      expect(data).toBe(null);
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });
});
