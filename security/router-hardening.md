# Router hardening record -- SCS4.1

Date: 2026-11-25
Station and router (the kit station's router, never the campus): YOUR_STATION -- YOUR_ROUTER_MODEL
Admin page address (the router's own address): 192.168.0.1
DHCP range: 192.168.0.100 - 192.168.0.199
Firmware date seen on the router: 2024-05-14

Tick a line [x] only when it is done and checked.  A line not done says why, on the same line.
Never write a password here.  The admin password and the wifi passphrase go on the owner's card, and on the
kit the owner's card goes to the SA.  The screenshot goes to ~/scs/evidence/scs4.1, checked for passwords first.

1. [x] Admin password changed from the default, on the owner's card, nowhere on the wall -- Changed from default and written on owner's card given to SA
2. [x] Wifi on WPA2 or WPA3 with a long passphrase -- three words and a number, not the shop's phone number -- Set to WPA2-PSK AES with passphrase on owner's card
3. [x] Network name gives away neither the router model nor the owner's name -- Renamed SSID to ShopNet-Office
4. [x] A guest network for customers, so the till and the printer are not on the strangers' wifi -- Enabled isolated Guest Wi-Fi with internal access disabled
5. [x] DHCP range noted; the printer's address reserved on the router (or fixed on the printer outside the range) -- Reserved 192.168.0.50 for printer MAC address
6. [x] WPS off; remote admin from the internet off -- Disabled WPS and confirmed remote management is off
7. [x] Firmware date noted; an update only if the SA says it is safe today -- Noted firmware date; SA advised not to update firmware during lab
8. [x] Router restarted afterwards and the four numbers read again on a laptop -- still right -- Rebooted router and verified all four numbers via net-look

## The printer

Printer's address (from its own panel or test page): 192.168.0.50
Reserved on the router (yes / no): yes
Added on a lab laptop by address, test page printed (yes / no): yes
Added on a phone, test page printed (yes / no): yes
Router restarted without the reservation first -- what happened: Printer pulled a different dynamic IP from the DHCP pool after reboot
Second look, the next SCS track day -- still at its address after the SAs' power-off (yes / no): not yet
Anything mechanical, named and referred (not opened): None -- paper feed and rollers worked cleanly
