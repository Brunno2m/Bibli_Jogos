import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoListComponent } from './jogo-list.component';

describe('JogoListComponent', () => {
  let component: JogoListComponent;
  let fixture: ComponentFixture<JogoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JogoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
