## The need
- **Site type:** [Describe your FC1 client's site without naming them, e.g., Local clinic booking and info site]
- **Visitors a day:** [Number] visitors/day (source: [where this number came from, e.g., FC1 client interview])
- **Budget:** [Amount] KES/month

## Measured
Measured at 12:15 EAT on 2026-11-21 (from EC2 instance over SSH and size-scs2b.4):
- **Processor kind (`uname -m`):** x86_64
- **Memory (`free -m`):** 957 MiB total, 312 MiB used, 645 MiB available
- **Load / CPU (`uptime` / `size-scs2b.4` average):** load average: 0.02, 0.01, 0.00 (average 1.8% CPU utilization, busiest hour 09:00 at 4.2%)
- **Disk (`df -h`) & Cores (`nproc`):** 1 vCPU, 3.8G used of 7.7G (50%)

## What to rent for what
| Workload / Need | What to rent | Monthly Price (USD) | Monthly Price (KES) | Pricing Page & Date Read |
| :--- | :--- | :--- | :--- | :--- |
| No-server static brochure site | S3 + CloudFront | $0.50 | 65 KES | https://aws.amazon.com/s3/pricing/ read 2026-11-21 |
| Learning and staging (scs-server) | t3.micro | $8.47 | 1,093 KES | https://aws.amazon.com/ec2/pricing/on-demand/ read 2026-11-21 |
| Production small dynamic site | Lightsail ($5 plan) | $5.00 | 645 KES | https://aws.amazon.com/lightsail/pricing/ read 2026-11-21 |
| Growing dynamic app with managed DB | Lightsail ($10 plan) | $10.00 | 1,290 KES | https://aws.amazon.com/lightsail/pricing/ read 2026-11-21 |
| Never rent (Overkill) | m5.2xlarge | $311.04 | 40,124 KES (36.7x the cost of a t3.micro) | https://aws.amazon.com/ec2/pricing/on-demand/ read 2026-11-21 |

Rate: 1 USD = 129.00 KES, from Central Bank of Kenya, read 2026-11-21

## My choice
This client should rent **Lightsail ($5 plan)** at **$5.00/month (645 KES/month)** — https://aws.amazon.com/lightsail/pricing/ read 2026-11-21.
- **x86 vs ARM (`t4g`):** Measured on `x86_64`. Moving to a `t4g` (ARM64) instance requires ARM64-compiled binaries and packages (`aarch64` `.deb` files or Docker images), while interpreted site code (PHP, Python, Node.js) runs without changes.

## Why not bigger, why not smaller
- **Why not bigger:** In `## Measured`, the workload uses only 312 MiB of 957 MiB RAM and averages 1.8% CPU, so paying for a larger instance wastes shillings on idle capacity.
- **Why not smaller:** A smaller tier like `t3.nano` (512 MiB RAM) or static-only S3 hosting could not run both the web server and database together without hitting out-of-memory crashes.

## Lightsail or EC2 for this client
I choose **Lightsail** for this client because it bundles a predictable fixed monthly shilling cost with a static IP and monthly data transfer included, avoiding surprise bandwidth bills.
