import { TestBed } from '@angular/core/testing';
import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerComponent],
    }).compileComponents();
  });

  it('today should be valid', () => {
    const fixture = TestBed.createComponent(DatePickerComponent);
    const app = fixture.componentInstance;
    expect(app.disabledDate(new Date())).toBeFalse();
  });

  it('yesterday should be invalid', () => {
    const fixture = TestBed.createComponent(DatePickerComponent);
    const app = fixture.componentInstance;
    const date = new Date();
    date.setDate(date.getDate() - 1);
    expect(app.disabledDate(date)).toBeTrue();
  });

  it('tomorrow should be valid', () => {
    const fixture = TestBed.createComponent(DatePickerComponent);
    const app = fixture.componentInstance;
    const date = new Date();
    date.setDate(date.getDate() + 1);
    expect(app.disabledDate(date)).toBeFalse();
  });
});
