#!/usr/bin/env python3
"""
Simple PDF-to-text extractor using pypdf (install with `pip install pypdf`).
Usage:
  python tools/extract_pdf.py pdf/MANUAL_API_FLASK.pdf > api-text.txt
"""
import sys
try:
    from pypdf import PdfReader
except Exception:
    print('Missing dependency: install with `pip install pypdf`', file=sys.stderr)
    sys.exit(2)

def extract(path):
    reader = PdfReader(path)
    out = []
    for i, page in enumerate(reader.pages, start=1):
        txt = page.extract_text() or ''
        out.append(f"\n\n--- Page {i} ---\n\n")
        out.append(txt)
    print(''.join(out))

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python tools/extract_pdf.py path/to/file.pdf', file=sys.stderr)
        sys.exit(1)
    extract(sys.argv[1])
