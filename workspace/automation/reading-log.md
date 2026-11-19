# Reading log -- SCS3.5

Script: workspace/automation/monthly-report.gs
Read to the last line before the first run: yes
Label: AI-assisted, directed by renter

| Line no. | The line, first words                   | In my own words                                                                                           | Which word |
| -------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| 4        | `function generateMonthlyReport(){`     | Starts the named block of instructions that builds the monthly sales report.                              | sequence   |
| 5        | `const ss = SpreadsheetApp...`          | Opens the active spreadsheet file we are currently working in.                                            | variable   |
| 6        | `const record = ss.getSheetByName...`   | Finds and selects the tab named RECORD where stock movements are logged.                                  | variable   |
| 7        | `const data = record.getRange...`       | Reads all rows from row 2 down to row 1000 across columns A to F, skipping row 1 headers.                 | variable   |
| 8        | `const reportMonth = 10;`               | Stores the target month number 10 (which represents November in JavaScript dates, or target month index). | variable   |
| 9        | `const reportYear = 2026;`              | Stores the target year 2026 to filter sales for.                                                          | variable   |
| 11       | `const monthName = new Date...`         | Converts the stored year and month number into the full English month name.                               | variable   |
| 12       | `const monthLabel = ...`                | Combines the month name and year into one text label like "November 2026".                                | variable   |
| 13       | `const monthlySales = data.filter...`   | Keeps only the rows where column A is a valid date in the target month and year and column C says "OUT".  | loop       |
| 15       | `const totalSales = monthlySales...`    | Adds up all the money amounts in column F across the filtered sales rows, treating blanks as zero.        | loop       |
| 16       | `const unitsSold = monthlySales...`     | Adds up all the item quantities in column D across the filtered sales rows, treating blanks as zero.      | loop       |
| 18       | `let report = ss.getSheetByName...`     | Looks for an existing tab named MONTHLYREPORT in the spreadsheet.                                         | variable   |
| 19       | `if (!report) {`                        | Checks if the MONTHLYREPORT tab does not exist yet.                                                       | condition  |
| 20       | `report = ss.insertSheet...`            | Creates a new tab named MONTHLYREPORT if it was missing.                                                  | sequence   |
| 22       | `report.clearContents();`               | Wipes any old report numbers off the MONTHLYREPORT tab before writing fresh totals.                       | sequence   |
| 24-26    | `report.getRange("A1:C1")...`           | Writes the three column headings ("REPORT MONTH", "TOTAL SALES", "UNITS SOLD") into row 1.                | sequence   |
| 27-29    | `report.getRange("A2:C2")...`           | Writes the calculated month label, total sales value, and total units sold into row 2.                    | sequence   |
| 35       | `function onEdit(e) {`                  | Runs automatically whenever any cell in the spreadsheet is edited by a user.                              | trigger    |
| 37       | `const sheet = e.range.getSheet();`     | Identifies which sheet tab the user just edited.                                                          | variable   |
| 39       | `if (sheet.getName() !== "INTAKE")`     | Stops immediately if the edit happened on any tab other than INTAKE.                                      | condition  |
| 41       | `const row = e.range.getRow();`         | Gets the row number of the cell that was edited.                                                          | variable   |
| 42       | `const column = e.range.getColumn();`   | Gets the column number of the cell that was edited.                                                       | variable   |
| 44       | `if (row === 1 \|\| column > 2)`        | Stops immediately if the user edited the header row or any column past column B.                          | condition  |
| 46       | `const item = sheet.getRange...`        | Reads the item name entered in column A of that edited row.                                               | variable   |
| 47       | `const quantity = sheet.getRange...`    | Reads the quantity entered in column B of that edited row.                                                | variable   |
| 49       | `if (item === "" \|\| quantity === "")` | Stops and waits if either the item name or quantity cell is still blank.                                  | condition  |
| 51       | `const isValid = typeof quantity...`    | Checks that the entered quantity is an actual number greater than zero.                                   | variable   |
| 53       | `const dateCell = sheet.getRange...`    | Selects column C in the same row where the entry date is stored.                                          | variable   |
| 55       | `if (dateCell.getValue() === "") {`     | Checks whether the date cell in column C is currently empty.                                              | condition  |
| 56       | `dateCell.setValue(new Date());`        | Stamps today's current date into column C if it was empty.                                                | sequence   |
| 57       | `dateCell.setNumberFormat...`           | Formats the stamped date as day/month/year (dd/MM/yyyy).                                                  | sequence   |
| 60       | `const checkCell = sheet.getRange...`   | Selects column D in the same row where the validation status goes.                                        | variable   |
| 62       | `if (isValid) {`                        | Checks if the quantity passed the positive number test from line 51.                                      | condition  |
| 63       | `checkCell.setValue("OK");`             | Writes "OK" into column D when the quantity is valid.                                                     | sequence   |
| 64       | `} else {`                              | Runs the alternative branch when the quantity is zero, negative, or text.                                 | condition  |
| 65       | `checkCell.setValue("INVALID ENTRY");`  | Writes "INVALID ENTRY" into column D when the quantity is not a positive number.                          | sequence   |
