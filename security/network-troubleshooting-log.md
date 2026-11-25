# Network troubleshooting log -- SCS4.1

Date: 2026-11-25
Station: YOUR_STATION_NAME

The fair copy of the paper log.  The kit station is the SA team's isolated lab network, never the campus.
Nothing private here: no passwords, no public addresses, no client's name.
The rules: the guess before the first swap.  Every step as it happens, including the ones that changed nothing
("nothing" in the What changed column is an answer, not a blank).  Put it back.  The SA initials the paper log
only after the put-back is checked.

## Fault 1 -- station fault

Symptom (the owner's words): Laptop shows no internet and cannot reach the local router
My guess (device, cable or network): cable
The rung I expected to fail: 2

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked Ethernet link light on laptop | Link light off | 1 |
| 2 | Swapped patch cable with a known-good cable | nothing | 2 |
| 3 | Checked switch port and reseated cable firmly | Link light turned green, IP assigned | 2 |

The rung that failed: 2
The fault was: Loose patch cable at the switch port
Fixed by: Reseating the cable firmly until it clicked
Put back: Verified station internet and local ping, left station in normal working state
SA initialled the paper log (yes / not yet): yes

## Fault 2 -- station fault

Symptom (the owner's words): Can ping router IP but web pages do not load by name
My guess (device, cable or network): network
The rung I expected to fail: 5

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Ran net-look to check IP, gateway, and DNS settings | IP and gateway valid, DNS pointed to wrong address | 4 |
| 2 | Pinged gateway IP directly | Reply received with <1ms latency | 3 |
| 3 | Set DNS back to automatic DHCP / correct local DNS | Domain names resolved and web pages loaded | 5 |

The rung that failed: 5
The fault was: Misconfigured static DNS address on the network adapter
Fixed by: Resetting DNS configuration to automatic (DHCP)
Put back: Verified browser loads pages and net-look shows clean settings
SA initialled the paper log (yes / not yet): yes

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): paste_12_chars_here
Card number (after the reveal): 27
Symptom (the owner's words, as my partner said it): Lab laptop has self-assigned 169.254.x.x IP and cannot reach router
My guess (device, cable or network): network
The rung I expected to fail: 3
My break.sh guess in one line (written before the reveal): network -- DHCP lease failed or static wrong subnet on lab device

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked cable and link light on lab laptop | nothing | 2 |
| 2 | Ran net-look to inspect IPv4 address and subnet mask | Showed 169.254.x.x APIPA address | 3 |
| 3 | Switched adapter from manual IP back to automatic (DHCP) | Received valid local IP and gateway | 3 |

The rung that failed: 3
The fault was: Lab device was set to an invalid static IP / DHCP disabled
Fixed by: Re-enabling automatic IP assignment (DHCP)
Proved on the lab device with the ladder (the rungs that passed after the fix): Rungs 1, 2, 3, 4, 5, and 6 all passed on net-look and ping
Put back (the undo line break.sh printed, done by hand and checked): Re-enabled DHCP, confirmed valid lease and gateway ping
SA initialled the paper log (yes / not yet): yes
Was my guess right, and what did the reveal add: Yes, it was a network-layer addressing fault; the reveal confirmed the card disabled DHCP on the interface

## The card I planted -- I was the partner

Card number: 28
The step break.sh printed, done by hand on the lab device (in my words, no passwords): Set a wrong default gateway address in the lab laptop IPv4 settings
The undo, done by hand after the fixer finished, and how we checked it: Restored default gateway to automatic DHCP and verified with net-look and gateway ping
The first thing my partner's log got right: Correctly identified that Rungs 1 and 2 passed before testing Rung 3/4 routing
