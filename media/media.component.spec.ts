import { ComponentFixture, TestBed } from '@angular/core/testing';
import mediaData from './media.json';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let numerosColumna1: number[] = mediaData.columa1;
  let numerosColumna2: number[] = mediaData.columna2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return media = 550.6 for the given input (columna1)', () => {
    const media = component.obtenerMedia(numerosColumna1);
    expect(media).toBeCloseTo(550.6, 1);
  });

  it('should return media = 60.32 for the given input (columna2)', () => {
    const media = component.obtenerMedia(numerosColumna2);
    expect(media).toBeCloseTo(60.32, 2);
  });
});
