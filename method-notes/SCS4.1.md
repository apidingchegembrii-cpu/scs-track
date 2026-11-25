# Method note -- SCS4.1

## 1. What I set out to do
Diagnose and fix two station faults and one fault card using the bottom-to-top troubleshooting ladder, harden the kit router, and configure a reserved IP for the office printer.

## 2. What I did, in order
Mapped the six network boxes, recorded my laptop's Layer 2 and Layer 3 numbers, isolated and fixed Faults 1 and 2, diagnosed Fault 3 using one AI prompt before touching hardware, hardened the router, and reserved the printer IP.

## 3. How I checked it worked
Verified all four network numbers with net-look after every fix, printed test pages from both a lab laptop and a phone, and confirmed the router screenshot contained no passwords.

## 4. What went wrong and what I did about it
Before adding a DHCP reservation, restarting the router caused the printer to pick up a new IP address; I fixed this by binding its MAC address to a reserved IP on the router and rebooting to verify.

## 5. What I would do differently next time
Write down the exact cable port numbers on the switch before swapping cables so put-back is faster and less error-prone.

## 6. What I might be wrong about, and how I would find out
I assumed the printer's DHCP reservation will hold across a full power-off cycle; I will verify this on the next track day by printing a configuration page after the SAs power-cycle the station and running check-scs4.1 --final.
