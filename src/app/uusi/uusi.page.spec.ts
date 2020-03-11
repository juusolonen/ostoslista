import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UusiPage } from './uusi.page';

describe('UusiPage', () => {
  let component: UusiPage;
  let fixture: ComponentFixture<UusiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UusiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UusiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
