import { TestBed } from '@angular/core/testing';

import { ToolsJsonParserService } from './tools-json-parser.service';

describe('ToolsJsonParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolsJsonParserService = TestBed.get(ToolsJsonParserService);
    expect(service).toBeTruthy();
  });
});
