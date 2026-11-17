# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why?  One row per person, or per identical job.
Groups are people; units are settings; every person is in one unit and many groups.
Why: the three questions in one line -- what the job needs, what goes wrong with more, who decided.
This map is of an invented business and may be committed.  Your client's map never comes here:
it lives in the client folder (Clients, in your Windows SCS folder).

| Person (job) | What the job needs | OU | Groups | Admin role | Why (one line) |
|---|---|---|---|---|---|
| The owner | Full oversight of business operations, finances, and tenant settings | /Shop | all-staff@shop.test, management@shop.test | Super Admin | The job needs full control of the business, more than one super-admin risks accidental lockout or breaches, the owner decided |
| The accountant (a sandbox user, ticket 4) | Access to financial records and password resets for staff | /Shop/Staff | all-staff@shop.test, finance@shop.test | Password reset only | The job needs billing and password resets, super-admin would expose security settings, the owner decided |
| The shop manager | Oversight of daily floor operations, rotas, and staff communication | /Shop/Staff | all-staff@shop.test, management@shop.test | none | The job needs staff scheduling and mail, admin privileges risk unintended tenant changes, the owner decided |
| Counter staff (four) | Customer service email, shared rota, and point-of-sale support | /Shop/Staff/Front Desk | all-staff@shop.test, counter@shop.test | none | The job needs customer mail and counter updates, extra access exposes financial records, the manager decided |
| The new starter (a sandbox user, ticket 1) | Basic email and calendar for front-desk counter duties without chat | /Shop/Staff/Front Desk | all-staff@shop.test, counter@shop.test | none | The job needs mail and calendar only, chat or admin access distracts from counter work, the owner decided |
| Welders (three) | Workshop job sheets, safety notices, and team announcements | /Shop/Workshop | all-staff@shop.test, workshop@shop.test | none | The job needs workshop schedules and mail, access to counter or finance data risks leaks, the manager decided |
| Drivers (two) | Delivery schedules, route updates, and dispatch communication | /Shop/Workshop | all-staff@shop.test, drivers@shop.test | none | The job needs delivery routes and mail, broader access exposes internal shop records, the manager decided |
| Me (the admin) | Managing user accounts, groups, and organizational units for the shop | /Shop/Staff | all-staff@shop.test, it-admin@shop.test | Groups Admin | The job needs user and group administration, full super-admin is reserved for the owner alone, the owner decided |

## The partner's cold read

Partner: Partner.  One person with more than the job needs, or "none" and why: none -- every role holds only the minimum access required for their daily duties.
