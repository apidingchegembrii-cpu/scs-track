## The need
- **Site type:** [Describe your FC1 client's site without naming them, e.g., Local clinic booking and info site]
- **Visitors a day:** [Number] visitors/day (source: [where the number came from, e.g., FC1 client interview])
- **Budget:** [Amount] KES/month

## Measured
[Paste sections 1 to 3 from your ~/scs-checks/size-scs2b.4-*.txt output here]

## What to rent for what
| Workload / Need | What to rent | Monthly Price (USD) | Monthly Price (KES) | Pricing Page & Date Read |
| :--- | :--- | :--- | :--- | :--- |
| Static brochure site | S3 + CloudFront | $[x.xx] | [x] KES | https://aws.amazon.com/s3/pricing/ read 2026-11-21 |
| Low-traffic dynamic site | Lightsail ($5 plan) | $5.00 | [x] KES | https://aws.amazon.com/lightsail/pricing/ read 2026-11-21 |
| Small dynamic app (EC2) | t3.micro | $[x.xx] | [x] KES | https://aws.amazon.com/ec2/pricing/on-demand/ read 2026-11-21 |
| [Row 4 from your sheet] | [Instance/Service] | $[x.xx] | [x] KES | [AWS Pricing URL] read 2026-11-21 |
| Never rent (Overkill) | m5.2xlarge | $[x.xx] | [x] KES ([Ratio]x the cost of a micro) | https://aws.amazon.com/ec2/pricing/on-demand/ read 2026-11-21 |

Rate: 1 USD = [Current Rate] KES, from [Source, e.g., Central Bank of Kenya], read 2026-11-21

## My choice
This client should rent **[Lightsail $5 plan / t3.micro]** at **$[x.xx]/month ([x] KES/month)** — from [AWS Pricing URL for your sandbox region], read 2026-11-21.
- **x86 vs ARM (`t4g`):** Measured on `[x86_64/arm64]`. Moving to a `t4g` (ARM) instance requires ARM64-compiled binaries/packages (e.g., `arm64` Docker images or `.deb` files), while interpreted code (PHP, Python, Node.js) runs unchanged.

## Why not bigger, why not smaller
- **Why not bigger:** In `## Measured`, the site averages `[quote CPU/RAM number from Measured]` and sits near idle most hours, so a larger instance wastes shillings.
- **Why not smaller:** A smaller tier like `t3.nano` (512 MiB RAM) or static S3 hosting could not run `[name what fails, e.g., the web server and database together without out-of-memory crashes]`.

## Lightsail or EC2 for this client
I choose **[Lightsail / EC2]** for this client because [one sentence with your reason, e.g., Lightsail bundles a predictable fixed monthly shilling cost with static IP and bandwidth included].
