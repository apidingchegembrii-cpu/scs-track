# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: reorderList() in workspace/stock-tools/reorder.js used `<` instead of `<=`, silently omitting items whose stock equals their reorder level (such as grinding discs 115 mm at 20/20).
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change the comparison in reorderList() from `<` to `<=` so items at or below their reorder level are included, matching README.md.
The test that shows the bug (input -> expected): CSV row `"grinding discs 115 mm,Gas and welding supplier,20,20,pieces"` passed to `reorderList(parseCsv(sample))` -> expected `["grinding discs 115 mm"]` (old code returned `[]`).
The prompt, word for word: In workspace/stock-tools/reorder.js, change reorderList so items with In stock equal to Reorder at are included (`<=` instead of `<`). Do not modify any other function.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| reorder.js:20 | Updated comment to note inclusive `<=` boundary per README spec | BEYOND | Kept as a 1-line clarifying comment on the adjusted function |
| reorder.js:22 | Changed `parseInt(r["In stock"], 10) < parseInt(r["Reorder at"], 10)` to `<=` | Yes | Kept unchanged; verified with `node --test reorder.test.js` |
| reorder.test.js:35-40 | Added unit test `includes items at their reorder level` with 20/20 input | Yes | Kept; verified it fails on commit 66f9168 and passes after patch |

Tests before the patch: 5 pass, 1 fail (`includes items at their reorder level` failed: `[] !== ['grinding discs 115 mm']`)
Tests after the patch: 6 pass, 0 fail (`node --test reorder.test.js`)
Tests after my adjustment: 6 pass, 0 fail (`node --test reorder.test.js`)
Commits on scs3.6-patch (the test, the patch, the adjustment): 3 commits (`test: fail when item stock equals reorder level`, `fix: include items at reorder level (<= instead of <)`, `chore: clarify inclusive reorder level boundary comment`)

## Receipt

1. Label: scs3.6-patch
2. Tool and tier: Gemini (free tier)
3. Spec and prompt: above, word for word
4. Tests or checks: `node --test workspace/stock-tools/reorder.test.js` (6/6 passing)
5. Rights line: not checked
6. Cost: 0
