import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const req = httpMock.expectOne('assets/table.json');
    req.flush({ table1: [], table2: [] });
  });

  it('should calculate the correct mean for both tables from JSON file', () => {
    const mockData = {
      table1: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503],
      table2: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    const req = httpMock.expectOne('assets/table.json');
    req.flush(mockData);

    const expectedMeanTable1 =
      (160 + 591 + 114 + 229 + 230 + 270 + 128 + 1657 + 624 + 1503) / 10;
    const expectedMeanTable2 =
      (15.0 + 69.9 + 6.5 + 22.4 + 28.4 + 65.9 + 19.4 + 198.7 + 38.8 + 138.2) /
      10;

    expect(component.meanTable1).toBeCloseTo(expectedMeanTable1, 1);
    expect(component.meanTable2).toBeCloseTo(expectedMeanTable2, 1);
  });

  it('should handle empty data from the JSON file', () => {
    const mockData = { table1: [], table2: [] };

    const req = httpMock.expectOne('assets/table.json');
    req.flush(mockData);

    expect(component.meanTable1).toBeNaN();
    expect(component.meanTable2).toBeNaN();
  });
});
