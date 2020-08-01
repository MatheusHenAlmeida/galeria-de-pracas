import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracasListaComponent } from './pracas-lista.component';
import { PracasService } from 'src/app/services/pracas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';

describe('PracasListaComponent', () => {
  let component: PracasListaComponent;
  let fixture: ComponentFixture<PracasListaComponent>;
  let userService;
  let sharedService;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj(['getUsers']);
    let mockUser = new Observable((data) => null);
    userService.getUsers.and.returnValue(mockUser);
    sharedService = jasmine.createSpyObj(['emitChange']);
    TestBed.configureTestingModule({
      providers: [
        { provide: PracasService, useValue: userService },
        { provide: SharedService, useValue: sharedService }
      ],
      declarations: [ PracasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracasListaComponent);
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
