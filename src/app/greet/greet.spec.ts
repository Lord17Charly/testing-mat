import { greet } from './greet';

describe('greet', () => {
  it('deberia incluir el nombre en el mensaje', () => {
    expect(greet('mosh')).toContain('mosh');
  });
});
