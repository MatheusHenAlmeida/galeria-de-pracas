import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';

describe('AppComponent', () => {
  let sharedService: SharedService;
  let appComponent: AppComponent;

  beforeEach(async(() => {
    sharedService = new SharedService();
    appComponent = new AppComponent(sharedService);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lista de usuários'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.titulo).toEqual('Lista de usuários');
  });

  it('should change the title, when emitter trigger new data', () => {
    sharedService.emitChange({ titulo: 'teste' });
    expect(appComponent.titulo).toBe('teste');
  });

  afterEach(() => {
    sharedService = null;
    appComponent = null;
  });
});
