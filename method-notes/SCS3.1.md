# Method note -- SCS3.1

## 1. What I set out to do
Configure users, groups, organizational units, and delegated admin roles in Google Workspace while logging every change before clicking.

## 2. What I did, in order
Installed the SCS3.1 tools, set up the workspace templates, logged and executed tickets 1 through 5, exported the users and audit CSVs, and mapped the reference shop access.

## 3. What went wrong, and how I fixed it
Installing the scripts with standard sudo redirection hit a permission error, so I used sudo tee to write the files into /usr/local/bin.

## 4. How long it took, against the plan
The lab setup, admin tasks, and audit matching took about two hours, staying within the scheduled session block.

## 5. One lesson for the next person
Always write the change-log row and timestamp before clicking save in the Admin console so the audit log times align cleanly.

## 6. What I might be wrong about, and how I would find out
I might have over-grouped or misassigned an OU for a reference role, which I will verify during my partner's cold read of the access map.
