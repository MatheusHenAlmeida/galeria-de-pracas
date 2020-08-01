import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PracaDetalheComponent } from './praca-detalhe.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPraca } from 'src/app/models/IPraca';
import { mock, verify, anything, instance } from 'ts-mockito';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

describe('PracaDetalheComponent', () => {
  let component: PracaDetalheComponent;
  let fixture: ComponentFixture<PracaDetalheComponent>;
  let userService;
  let sharedService;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj(['getUser']);
    sharedService = mock(SharedService);
    const response = new Observable(() => null);
    userService.getUser.and.returnValue(response);
    TestBed.configureTestingModule({
      declarations: [ PracaDetalheComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: new Observable(() => { id: 1 })
          }
        },
        { provide: UserService, useValue: userService },
        { provide: SharedService, useFactory: () => instance(sharedService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new title', () => {
      verify(sharedService.emitChange(anything())).called();
      expect(component.praca).toBeNull();
  });
});
