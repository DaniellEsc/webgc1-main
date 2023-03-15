import { CiudadPipe } from "./ciudad.pipe";


describe('CiudadPipe', () => {
  it('create an instance', () => {
    const pipe = new CiudadPipe();
    expect(pipe).toBeTruthy();
  });
});
