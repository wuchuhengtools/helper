import { copyStringToClipboard } from './index';

// Mock document and execCommand
const mockExecCommand = jest.fn();
const mockBodyAppendChild = jest.fn();
const mockBodyRemoveChild = jest.fn();
const mockSelect = jest.fn();

describe('copyStringToClipboard', () => {
  beforeEach(() => {
    // Setup mocks
    (document.createElement as jest.Mock).mockReturnValue({
      select: mockSelect,
      value: '',
      setAttribute: jest.fn()
    });
    
    document.body.appendChild = mockBodyAppendChild;
    document.body.removeChild = mockBodyRemoveChild;
    document.execCommand = mockExecCommand;
    
    // Reset mocks
    mockExecCommand.mockClear();
    mockBodyAppendChild.mockClear();
    mockBodyRemoveChild.mockClear();
    mockSelect.mockClear();
  });

  it('should create a textarea element', () => {
    copyStringToClipboard('test');
    
    expect(document.createElement).toHaveBeenCalledWith('textarea');
  });

  it('should set the textarea value to the provided string', () => {
    const textarea = document.createElement('textarea');
    (document.createElement as jest.Mock).mockReturnValue(textarea);
    
    copyStringToClipboard('Hello, World!');
    
    expect(textarea.value).toBe('Hello, World!');
  });

  it('should set the textarea position to absolute and left to -9999px', () => {
    const textarea = document.createElement('textarea');
    (document.createElement as jest.Mock).mockReturnValue(textarea);
    
    copyStringToClipboard('test');
    
    expect(textarea.setAttribute).toHaveBeenCalledWith('style', "position: 'absolute'; left: '-9999px'");
  });

  it('should append the textarea to the document body', () => {
    copyStringToClipboard('test');
    
    expect(mockBodyAppendChild).toHaveBeenCalled();
  });

  it('should select the textarea content', () => {
    const textarea = document.createElement('textarea');
    (document.createElement as jest.Mock).mockReturnValue(textarea);
    
    copyStringToClipboard('test');
    
    expect(mockSelect).toHaveBeenCalled();
  });

  it('should execute copy command', () => {
    copyStringToClipboard('test');
    
    expect(mockExecCommand).toHaveBeenCalledWith('copy');
  });

  it('should remove the textarea from the document body', () => {
    const textarea = document.createElement('textarea');
    (document.createElement as jest.Mock).mockReturnValue(textarea);
    
    copyStringToClipboard('test');
    
    expect(mockBodyRemoveChild).toHaveBeenCalledWith(textarea);
  });

  it('should handle empty string', () => {
    copyStringToClipboard('');
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe('');
    expect(mockSelect).toHaveBeenCalled();
    expect(mockExecCommand).toHaveBeenCalledWith('copy');
  });

  it('should handle special characters', () => {
    const specialText = 'Hello, World! @#$%^&*()';
    copyStringToClipboard(specialText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(specialText);
  });

  it('should handle unicode characters', () => {
    const unicodeText = 'こんにちは 🌍 Hello 世界! 🎉';
    copyStringToClipboard(unicodeText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(unicodeText);
  });

  it('should handle long text', () => {
    const longText = 'x'.repeat(1000);
    copyStringToClipboard(longText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(longText);
  });

  it('should handle numbers', () => {
    const numberText = '1234567890';
    copyStringToClipboard(numberText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(numberText);
  });

  it('should handle JSON strings', () => {
    const jsonText = '{"name": "John", "age": 30}';
    copyStringToClipboard(jsonText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(jsonText);
  });

  it('should handle URLs', () => {
    const urlText = 'https://example.com/path?query=value#fragment';
    copyStringToClipboard(urlText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(urlText);
  });

  it('should handle newlines and line breaks', () => {
    const multiLineText = 'Line 1\nLine 2\nLine 3';
    copyStringToClipboard(multiLineText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(multiLineText);
  });

  it('should handle tabs', () => {
    const tabbedText = 'Column1\tColumn2\tColumn3';
    copyStringToClipboard(tabbedText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(tabbedText);
  });

  it('should handle mixed whitespace', () => {
    const mixedText = '  Hello   World!  \t\n  ';
    copyStringToClipboard(mixedText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(mixedText);
  });

  it('should work with HTML entities', () => {
    const htmlText = '<div>Hello & World!</div>';
    copyStringToClipboard(htmlText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(htmlText);
  });

  it('should work with email addresses', () => {
    const emailText = 'user.name+tag@example-domain.com';
    copyStringToClipboard(emailText);
    
    const textarea = document.createElement('textarea');
    expect(textarea.value).toBe(emailText);
  });

  it('should clean up the textarea after copying', () => {
    copyStringToClipboard('test');
    
    // Verify the textarea was created and removed
    expect(mockBodyAppendChild).toHaveBeenCalledTimes(1);
    expect(mockBodyRemoveChild).toHaveBeenCalledTimes(1);
  });

  it('should maintain the correct sequence of operations', () => {
    copyStringToClipboard('test');
    
    // Verify the sequence: create → set value → set attribute → append → select → copy → remove
    const textarea = document.createElement('textarea');
    
    expect(textarea.setAttribute).toHaveBeenCalledWith('style', "position: 'absolute'; left: '-9999px'");
    expect(mockBodyAppendChild).toHaveBeenCalledWith(textarea);
    expect(mockSelect).toHaveBeenCalled();
    expect(mockExecCommand).toHaveBeenCalledWith('copy');
    expect(mockBodyRemoveChild).toHaveBeenCalledWith(textarea);
  });

  it('should handle the case where document.execCommand fails', () => {
    mockExecCommand.mockImplementation(() => {
      throw new Error('Copy command failed');
    });

    expect(() => {
      copyStringToClipboard('test');
    }).toThrow('Copy command failed');

    // Should still clean up even if execCommand fails
    expect(mockBodyRemoveChild).toHaveBeenCalled();
  });
});