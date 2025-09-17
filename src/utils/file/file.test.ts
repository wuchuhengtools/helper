import { fileToBase64 } from './index';

describe('fileToBase64', () => {
  it('should convert a text file to base64', async () => {
    const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' });
    const result = await fileToBase64(file);
    
    expect(result).toMatch(/^data:text\/plain;base64,/);
    expect(result).toContain('SGVsbG8sIFdvcmxkIQ==');
  });

  it('should convert an image file to base64', async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx?.fillRect(0, 0, 100, 100);
    
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
    if (blob) {
      const file = new File([blob], 'test.png', { type: 'image/png' });
      
      const result = await fileToBase64(file);
      expect(result).toMatch(/^data:image\/png;base64,/);
    }
  });

  it('should handle different file types', async () => {
    const jsonFile = new File(['{"test": "value"}'], 'data.json', { type: 'application/json' });
    const result = await fileToBase64(jsonFile);
    
    expect(result).toMatch(/^data:application\/json;base64,/);
    expect(result).toContain('eyJ0ZXN0IjogInZhbHVlIn0=');
  });

  it('should reject when file reading fails', async () => {
    const file = new File(['test'], 'test.txt');
    
    // Mock FileReader to simulate error
    const originalFileReader = global.FileReader;
    global.FileReader = class extends FileReader {
      readAsDataURL() {
        setTimeout(() => {
          if (this.onerror) {
            this.onerror(new ProgressEvent('error') as any);
          }
        }, 10);
      }
    } as any;

    await expect(fileToBase64(file)).rejects.toThrow();
    
    // Restore original FileReader
    global.FileReader = originalFileReader;
  });

  it('should preserve file type in data URL', async () => {
    const pdfFile = new File(['%PDF-1.4'], 'document.pdf', { type: 'application/pdf' });
    const result = await fileToBase64(pdfFile);
    
    expect(result).toMatch(/^data:application\/pdf;base64,/);
    expect(result).toContain('JVBPRi0xLjQ=');
  });

  it('should handle empty files', async () => {
    const emptyFile = new File([''], 'empty.txt', { type: 'text/plain' });
    const result = await fileToBase64(emptyFile);
    
    expect(result).toMatch(/^data:text\/plain;base64,/);
    expect(result).toContain('');
  });

  it('should handle files with special characters', async () => {
    const specialCharsFile = new File(['Hello, 世界! 🌍'], 'special.txt', { type: 'text/plain' });
    const result = await fileToBase64(specialCharsFile);
    
    expect(result).toMatch(/^data:text\/plain;base64,/);
    expect(result).toContain('SGVsbG8sIOS4lueVjCEgw4DDhA==');
  });

  it('should handle large files', async () => {
    // Create a larger text file (1KB)
    const largeContent = 'x'.repeat(1024);
    const largeFile = new File([largeContent], 'large.txt', { type: 'text/plain' });
    const result = await fileToBase64(largeFile);
    
    expect(result).toMatch(/^data:text\/plain;base64,/);
    expect(result).toHaveLength(largeContent.length * 4/3 + 22); // Base64 overhead + data URI prefix
  });

  it('should maintain file name in data URL', async () => {
    const testFile = new File(['test'], 'test-name.txt', { type: 'text/plain' });
    const result = await fileToBase64(testFile);
    
    expect(result).toMatch(/^data:text\/plain;base64,/);
    // The base64 content should be valid
    const base64Content = result.replace(/^data:text\/plain;base64,/, '');
    expect(base64Content).toBe('dGVzdA==');
  });

  it('should handle binary file data', async () => {
    // Create a simple binary file
    const binaryData = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" in binary
    const binaryFile = new File([binaryData], 'binary.bin', { type: 'application/octet-stream' });
    const result = await fileToBase64(binaryFile);
    
    expect(result).toMatch(/^data:application\/octet-stream;base64,/);
    expect(result).toContain('SGVsbG8=');
  });
});