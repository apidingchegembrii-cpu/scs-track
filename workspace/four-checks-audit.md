# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, tokens, or gateway credentials in reorder.js and send-sms.js.
Found: Hardcoded SMS gateway key on line 9 of workspace/stock-tools/send-sms.js instead of reading process.env.SMS_API_KEY.
Evidence: `grep -n "SMS_API_KEY" workspace/stock-tools/send-sms.js` printed `9:const SMS_API_KEY = process.env.SMS_API_KEY;` after removing the hardcoded key.

### Edge cases
Ugly inputs, written before trying them: Items where In stock equals Reorder at (20 == 20), blank In stock (""), quoted item names containing commas ("Nails, 3 inch"), and apostrophes in lowercase names (ng'ombe salt lick).
Found: reorderList uses `<` instead of `<=`, dropping items at their reorder level like grinding discs 115 mm (20/20); blank In stock parses as NaN and is dropped; naive split(",") breaks quoted fields with commas; tidyName capitalizes after apostrophes (Ng'Ombe).
Evidence: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` omits Cement 50 kg, Nails 3 inch, and grinding discs 115 mm (20/20), and prints `Ng'Ombe Salt Lick`.

### Wrong versions
Looked for: JavaScript methods that fail on older Node LTS versions despite README claiming "Works on any Node".
Found: groupBySupplier in workspace/stock-tools/reorder.js line 27 uses Object.groupBy(), which requires Node 21+ and throws TypeError on Node 18/20 LTS.
Evidence: `node -e 'console.log(process.version, typeof Object.groupBy)'` printed `v22.22.1 function` (missing on Node < 21).

### Invented libraries
Looked for: Non-existent imports or hallucinated standard-library functions in reorder.js and send-sms.js.
Found: workspace/stock-tools/send-sms.js line 5 imports `{ fetchWithRetry } = require("node:http")`, which does not exist in Node's node:http module.
Evidence: `node -e 'console.log(typeof require("node:http").fetchWithRetry)'` printed `undefined`.

The one to fix first, and why: Auth (hardcoded SMS_API_KEY in send-sms.js) first because the secret is exposed in plain text, followed by the `<=` reorder boundary bug in reorderList so items at their reorder level are not missed.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded API keys, sheet IDs, emails, or tokens in workspace/automation/monthly-report.gs.
Found: Clean -- uses SpreadsheetApp.getActiveSpreadsheet() with /** @OnlyCurrentDoc */ scope and no hardcoded credentials or IDs.
Evidence: `grep -rn "AIza\|sk-\|Bearer\|password\|secret\|key" workspace/automation/monthly-report.gs || echo "no hardcoded secrets"` printed `no hardcoded secrets`.

### Edge cases
Ugly inputs, written before trying them: Empty rows, non-Date values in column A, missing MONTHLYREPORT sheet, and zero/negative quantities in onEdit.
Found: In generateMonthlyReport(), reportMonth (10) and reportYear (2026) are hardcoded rather than derived from the current/target month, and data.filter checks `typeof row[0].getMonth === "function"` which throws a TypeError if row[0] is null or undefined.
Evidence: `grep -n "reportMonth\|getMonth" workspace/automation/monthly-report.gs` printed lines 8 and 13 (`const reportMonth = 10;` and `typeof row[0].getMonth === "function"`).

### Wrong versions
Looked for: Deprecated Apps Script services (e.g., UiApp, DocsList) or ES features unsupported in Google Apps Script V8 runtime.
Found: Clean -- uses standard SpreadsheetApp methods and ES6 const/arrow functions supported by Apps Script V8 runtime.
Evidence: Read `workspace/automation/monthly-report.gs` lines 1-63 on 2026-11-24; only SpreadsheetApp, Date.prototype.toLocaleDateString, and standard Array methods are used.

### Invented libraries
Looked for: Non-existent Apps Script globals, methods, or external libraries in workspace/automation/monthly-report.gs.
Found: Clean -- all methods (getActiveSpreadsheet, getSheetByName, getRange, getValues, setValues, setNumberFormat) are documented Google Apps Script SpreadsheetApp APIs.
Evidence: Read `workspace/automation/monthly-report.gs` lines 1-63 on 2026-11-24; verified against Google Apps Script SpreadsheetApp reference (2026-11-24).

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Add a null/Date guard (`row[0] instanceof Date`) and parameterize reportMonth/reportYear on the sheet copy, and log the test case in workspace/automation/test-log.md.
