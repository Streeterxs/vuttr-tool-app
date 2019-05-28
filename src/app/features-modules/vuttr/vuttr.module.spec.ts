import { VuttrModule } from './vuttr.module';

describe('VuttrModule', () => {
  let vuttrModule: VuttrModule;

  beforeEach(() => {
    vuttrModule = new VuttrModule();
  });

  it('should create an instance', () => {
    expect(vuttrModule).toBeTruthy();
  });
});
