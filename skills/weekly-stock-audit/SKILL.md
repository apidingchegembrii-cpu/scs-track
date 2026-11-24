# Weekly Stock Tool Audit & Reorder Check

## When to use
Run every Monday morning after downloading the fresh `stock-export.csv` from the shop's stock sheet before sending supplier reorder messages.

## Steps
1. Save the downloaded CSV to `workspace/stock-tools/stock-export.csv` and verify no secrets exist in `workspace/stock-tools/` with `grep -rn "SMS_API_KEY" workspace/stock-tools/`.
2. Run the automated test suite: `node --test workspace/stock-tools/reorder.test.js`.
3. Preview the grouped reorder message: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv`.
4. Preview the SMS gateway URL without sending: `SMS_API_KEY=test node workspace/stock-tools/send-sms.js workspace/stock-tools/stock-export.csv --dry-run`.

## How you know it worked
All tests in `reorder.test.js` pass (`0` failures), every supplier group prints cleanly without missing boundary items, and `--dry-run` prints the `Would call:` URL without exposing a real key.

Ran: 2026-11-24 -- 6/6 tests passed in `node --test workspace/stock-tools/reorder.test.js` and secret scan confirmed `process.env.SMS_API_KEY` is used.
