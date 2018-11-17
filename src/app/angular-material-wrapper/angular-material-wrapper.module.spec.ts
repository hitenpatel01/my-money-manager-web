import { AngularMaterialWrapperModule } from './angular-material-wrapper.module';

describe('AngularMaterialModule', () => {
  let angularMaterialModule: AngularMaterialWrapperModule;

  beforeEach(() => {
    angularMaterialModule = new AngularMaterialWrapperModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialModule).toBeTruthy();
  });
});
