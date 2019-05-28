import { BbComponentsModule } from './bb-components.module';

describe('BbComponentsModule', () => {
  let bbComponentsModule: BbComponentsModule;

  beforeEach(() => {
    bbComponentsModule = new BbComponentsModule();
  });

  it('should create an instance', () => {
    expect(bbComponentsModule).toBeTruthy();
  });
});
