#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

FILES=(src/pages src/layouts src/components)

# Basic, fast checks using ripgrep.
checks=(
  "<title>"
  "rel=\"canonical\""
  "property=\"og:title\""
  "property=\"og:description\""
  "property=\"og:image\""
  "name=\"twitter:card\""
  "rel=\"alternate\" hreflang"
)

echo "SEO Audit (quick) — $(date -Iseconds)"
echo "Repo: $(basename "$ROOT_DIR")"
echo

echo "[1] Global tag presence (should exist in MainLayout)"
for pattern in "${checks[@]}"; do
  if rg -n --hidden --no-ignore -S "$pattern" "${FILES[@]}" >/dev/null 2>&1; then
    echo "  OK: $pattern"
  else
    echo "  MISSING: $pattern"
  fi
done

echo

echo "[2] Heading structure hints (pages)"
# Find pages with no h1 at all
NO_H1=$(rg -L --files-without-match "<h1" src/pages || true)
if [[ -n "$NO_H1" ]]; then
  echo "  Pages missing <h1>:"
  echo "$NO_H1" | sed 's/^/  - /'
else
  echo "  OK: All pages contain <h1>"
fi



echo

echo "[2b] Pages using <PageHero> (hero component includes <h1>)"
HERO_PAGES=$(rg -l -S "<PageHero\b" src/pages || true)
if [[ -n "$HERO_PAGES" ]]; then
  echo "$HERO_PAGES" | sed 's/^/  - /'
else
  echo "  (none)"
fi

echo

echo "[3] Duplicate <h1> candidates (pages)"
# very rough heuristic: count h1 occurrences per file
python3 - <<'PY'
from pathlib import Path
import re
pages = Path('src/pages')
pat = re.compile(r"<h1\b", re.I)
dups=[]
for f in pages.rglob('*.astro'):
    c = len(pat.findall(f.read_text(encoding='utf-8', errors='ignore')))
    if c>1:
        dups.append((str(f), c))
if dups:
    print('  Files with >1 <h1>:')
    for f,c in sorted(dups):
        print(f'  - {f} ({c})')
else:
    print('  OK: No obvious duplicate <h1> (>1) found')
PY

echo

echo "Done. (This script is heuristic; use it as a fast smoke check.)"
