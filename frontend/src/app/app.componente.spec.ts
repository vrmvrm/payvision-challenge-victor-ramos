import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TransactionsService } from './services/transactions.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ TransactionsService ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTransactions', fakeAsync(() => {
    spyOn(component, 'onClick');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onClick).toHaveBeenCalled();
  }));
});
