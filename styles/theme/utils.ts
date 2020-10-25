export function fontStack(fonts: string[]): string {
    return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}
