import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { IUser } from '../models/IUser';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  const USER_URL = environment.user_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must return list of users', () => {
    let mockedList = [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }];

    service.getUsers().subscribe((data: IUser[]) => {
      expect(data.length).toBe(2);
      expect(data[0].name).toBe("Leanne Graham")
      expect(data[1].name).toBe("Ervin Howell");
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });

  it('must return empty list', () => {
    let mockedList = [];

    service.getUsers().subscribe((data: IUser[]) => {
      expect(data.length).toBe(0);
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });

  it('must return a specific user', () => {
    let mockedList = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }

    service.getUser(1).subscribe((data: IUser) => {
      expect(data.id).toBe(1);
      expect(data.name).toBe("Leanne Graham");
      expect(data.username).toBe("Bret");
      expect(data.email).toBe("Sincere@april.biz");
      expect(data.phone).toBe("1-770-736-8031 x56442");
      expect(data.website).toBe("hildegard.org");
      expect(data.company.name).toBe("Romaguera-Crona");
      expect(data.company.catchPhrase).toBe("Multi-layered client-server neural-net");
      expect(data.company.bs).toBe("harness real-time e-markets");
      expect(data.address.city).toBe("Gwenborough");
      expect(data.address.street).toBe("Kulas Light");
      expect(data.address.suite).toBe("Apt. 556");
      expect(data.address.zipcode).toBe("92998-3874");
      expect(data.address.geo.lat).toBe("-37.3159");
      expect(data.address.geo.lng).toBe("81.1496");
    });
    const req = httpMock.expectOne(USER_URL + "/1");
    req.flush(mockedList);
  });

  it('must return no user', () => {
    let mockedList = null;

    service.getUsers().subscribe((data: IUser) => {
      expect(data).toBe(null);
    });
    const req = httpMock.expectOne(USER_URL);
    req.flush(mockedList);
  });
});
