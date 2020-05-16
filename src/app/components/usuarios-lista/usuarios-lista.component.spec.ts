import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, verify, anything } from 'ts-mockito';

import { UsuariosListaComponent } from './usuarios-lista.component';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

describe('UsuariosListaComponent', () => {
  let component: UsuariosListaComponent;
  let fixture: ComponentFixture<UsuariosListaComponent>;
  let userService;
  let sharedService;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj(['getUsers']);
    let mockUser = new Observable((data) => null);
    userService.getUsers.and.returnValue(mockUser);
    sharedService = jasmine.createSpyObj(['emitChange']);
    TestBed.configureTestingModule({
      providers:[
        { provide: UserService, useValue: userService },
        { provide: SharedService, useValue: sharedService }
      ],
      declarations: [ UsuariosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new title', () => {
    expect(sharedService.emitChange).toHaveBeenCalled();
  });
});
