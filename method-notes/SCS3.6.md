1. Audited workspace/stock-tools and my SCS3.5 script across auth, edge, version, and invented checks with recorded command evidence.
2. Removed the hardcoded SMS_API_KEY in workspace/stock-tools/send-sms.js manually and read it from process.env.SMS_API_KEY.
3. Wrote a failing test on branch scs3.6-patch first, applied a minimal patch, and logged the full diff on the patch card.
4. Added a repo rules file and a weekly skill file with a real run date and result.
5. Ran an agent task on branch scs3.6-agent, logged each step and one rejected change, and merged only after reviewing.
6. Check run least carefully on my own patch: version — a test running node --test under both Node 20 and Node 22 (or checking engine constraints in package.json) would tell me if any API depends on a specific Node version.
