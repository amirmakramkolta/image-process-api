import placeholderProcess from '../../utilities/placeholderUtilities';

describe('the placeholder utilities', (): void => {
  it('should have svg tag', () => {
    const tag: string = placeholderProcess.placeholderInHtml('100', '200');
    expect(tag).toContain('svg');
  });
});
