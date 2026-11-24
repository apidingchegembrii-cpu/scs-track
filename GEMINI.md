# Repository Rules

## Stack
- Node.js v22.22.1 (built-in `node:test` and `node:assert`, zero external npm dependencies) for `workspace/stock-tools/`.
- Google Apps Script (V8 runtime, SpreadsheetApp) for `workspace/automation/`.

## Tests
- Run `node --test workspace/stock-tools/reorder.test.js` before committing any change to `workspace/stock-tools/`.
- Verify dry-run SMS output with `SMS_API_KEY=test node workspace/stock-tools/send-sms.js workspace/stock-tools/stock-export.csv --dry-run`.

## Never
- Never hardcode API keys, gateway tokens, or phone numbers in source files; always read secrets from `process.env` and keep `.env` in `.gitignore`.
- Never use `Object.groupBy` or unverified Node modules like `fetchWithRetry` from `node:http` when targeting cross-version Node compatibility.
- Never use strict `<` for reorder threshold checks when the spec requires items at or below (`<=`) their reorder level.
