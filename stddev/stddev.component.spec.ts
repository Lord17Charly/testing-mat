import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from '../media/media.component';
import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let mediaComponent: MediaComponent;
  let numerosColumna1: number[] = [
    150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503,
  ];
  let numerosColumna2: number[] = [
    15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent, MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    mediaComponent = TestBed.inject(MediaComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stddev = 572.03 if input is [150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const stddev = component.obtenerDesviacionEstandar(numerosColumna1);
    expect(stddev).toBeCloseTo(572.03, 2);
  });

  it('should return stddev = 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const stddev = component.obtenerDesviacionEstandar(numerosColumna2);
    expect(stddev).toBeCloseTo(62.26, 2);
  });
});
