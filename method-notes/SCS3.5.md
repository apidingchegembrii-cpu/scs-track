1. I started from a one-page paper spec initialled by the trainer and tested everything on a separate copy (`Copy of KIOSK BACK OFFICE`) with made-up rows so the owner's real sheet stayed untouched.
2. I restricted permissions using `/** @OnlyCurrentDoc */` at the top of the script so Google Sheets only requests access to the active spreadsheet and nothing else in Drive.
3. Before running the code, I read every line in my own words in `reading-log.md` and calculated expected totals by hand in `test-log.md`.
4. When Test 1 returned zero totals, I traced the bug to line 13 (`typeof` placed on the wrong side of `getMonth()`), patched that single line by hand in commit `37b2243`, and re-tested until it passed.
5. I checked all nine standard failure modes against specific line numbers in `breaks.md` and confirmed `onEdit` only acts on valid entries in columns A and B of `INTAKE`.
6. What I might be wrong about is assuming the owner's real `RECORD` tab uses the exact same column order (Date in A, Type in C, Quantity in D, Total in F) and has fewer than 1,000 rows; I would find out by checking the live header row and row count on the owner's sheet with the owner before deploying.
