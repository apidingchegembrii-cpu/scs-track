## Overkill test
1. **Can a notebook or calculator handle it faster?** No, tracking stock levels and reorder flags across 20+ items manually causes daily math errors.
2. **Does the owner actually look at summaries?** Yes, the owner checks stock levels before restocking the kiosk.
3. **Will someone type the rows consistently?** Yes, dropdown rules on ITEM and DIRECTION prevent typos.
4. **Is there a phone/computer available at the kiosk?** Yes, the owner updates the sheet on their phone/laptop at close of business.
5. **Does the owner want this structure?** Yes, they asked for an automatic REORDER alert.

Verdict: Sheets.  Pattern: inventory.  Because: Bri's Kiosk needs automateo
d stock balances and REORDER alerts across multiple items without manual ledger math.

## Validation
| Column | Rule | The garbage I typed | Refused? |
| :--- | :--- | :--- | :--- |
| DATE | Valid date | `not-a-date` | Yes |
| ITEM | List from `LISTS` | `Unknown Soda` | Yes |
| DIRECTION | List (`IN`, `OUT`) | `MAYBE` | Yes |
| QUANTITY | Number greater than 0 | `-5` | Yes |
| PRICE | Number greater than or equal to 0 | `abc` | Yes |

## Protection
| Range | Who can edit | Warning or restriction | Entry columns still open? |
| :--- | :--- | :--- | :--- |
| `DASHBOARD!A1:Z100` | Owner only | Restriction (reject edits) | Yes (`RECORDS!A:E` open) |
| `RECORDS!F2:F1000` | Owner only | Restriction (reject edits) | Yes (`RECORDS!A:E` open) |

## AI receipts
| The ask (headings only) | The formula | What I changed | The hand check (log row) |
| :--- | :--- | :--- | :--- |
| <Write the exact prompt with column headings only, or "No AI used"> | <Paste formula or "N/A"> | <What you adjusted or "N/A"> | <Log row # or "N/A"> |

## Break the books
| The attack | What I said would happen | What happened | Held or the fix |
| :--- | :--- | :--- | :--- |
| 1. <Drill card 1 attack> | <Your prediction> | <What happened> | Held (or <your fix>) |
| 2. <Drill card 2 attack> | <Your prediction> | <What happened> | Held |
| 3. <Drill card 3 attack> | <Your prediction> | <What happened> | Held |
| 4. <Drill card 4 attack> | <Your prediction> | <What happened> | Held |
| 5. <Drill card 5 attack> | <Your prediction> | <What happened> | Held |
| 6. <Drill card 6 attack> | <Your prediction> | <What happened> | Held |
| 7. <Drill card 7 attack> | <Your prediction> | <What happened> | Held |
