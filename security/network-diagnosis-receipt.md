# AI diagnosis receipt -- SCS4.1

One prompt, before the hands touch the kit, inside the five moves.  Nothing private in it: no router password,
no client's name, no public address, no screenshot.  The hands follow the ladder, not the tool.

Tool (and tier): Gemini (Free tier)
Date: 2026-11-25
The fault it was for (Fault 1, 2 or 3 in the log): Fault 3
The prompt, word for word: A Windows laptop on a small office LAN has an IP address starting with 169.254 and cannot reach the router. Give me a step-by-step diagnostic order from physical layer up.
Its order of checks (one line): Check Ethernet cable/link light, check IP/DHCP settings, ping local gateway, check DNS resolution, test external internet.
Where it matched the ladder: Started at physical link (Rung 1-2) before checking IP/DHCP (Rung 3) and gateway (Rung 4).
The rung it skipped or invented: none -- it matched
What my hands did instead, and why: Followed the ladder bottom-to-top, verifying link light first before checking net-look for the 169.254 APIPA address and restoring DHCP.
Label: AI-assisted diagnosis, checked against the ladder
