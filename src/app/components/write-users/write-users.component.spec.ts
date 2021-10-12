import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteUsersComponent } from './write-users.component';

describe('WriteUsersComponent', () => {
  let component: WriteUsersComponent;
  let fixture: ComponentFixture<WriteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
