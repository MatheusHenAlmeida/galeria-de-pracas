import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsuarioDetalheComponent } from './usuario-detalhe.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { mock, verify, anything, instance, when } from 'ts-mockito';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

describe('UsuarioDetalheComponent', () => {
  let component: UsuarioDetalheComponent;
  let fixture: ComponentFixture<UsuarioDetalheComponent>;
  let userService;
  let sharedService;
  let mockedUser = {} as IUser;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj(['getUser']);
    sharedService = mock(SharedService);
    let response = new Observable(() => null);
    userService.getUser.and.returnValue(response);
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalheComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: new Observable(() => {id: 1})
          }
        },
        { provide: UserService, useValue: userService },
        { provide: SharedService, useFactory: () => instance(sharedService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new title', () => {
      verify(sharedService.emitChange(anything())).called()
      expect(component.usuario).toBeNull();
  });
});
