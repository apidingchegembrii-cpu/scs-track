Built the Bri's Kiosk inventory tracker with LISTS, RECORDS, and DASHBOARD tabs.
Added strict data validation rules on DATE, ITEM, DIRECTION, QUANTITY, and PRICE so bad entries are rejected immediately.
Protected the Dashboard and calculated AMOUNT column so formulas cannot be accidentally overwritten.
Verified five Dashboard figures by hand with my partner, including a prior-month row, and fixed one range mismatch.
Tested seven Break the Books attacks to ensure open-ended ranges count new rows and invalid inputs fail safely.
What I might be wrong about: the owner might find mobile dropdown entry too slow during rush hours, which I would find out by checking the version history and observing their closing routine after one week.
