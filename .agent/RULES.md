# Agent Collaboration Rules
# Elite Prospect — player-portfolio
# Last updated: 2026-03-19

---

## 1. Step-through execution

Never execute multiple changes in a single pass.
Break every task into discrete, numbered steps.
After completing each step, STOP and report:

  - What was done
  - What file(s) were changed
  - What the expected result is
  - What confirmation is needed before proceeding

Do not move to the next step until confirmation is received.

---

## 2. No visual self-verification

This agent does not have access to a preview browser.
All visual confirmations must go through the human operator.

When a step produces a visual output, output this exact block:

  ---
  VISUAL CHECK REQUIRED
  Action: [what you just changed]
  Expected: [what the human should see in the browser]
  URL: [the exact route to check, e.g. /players/aaliyah-chavez]
  Confirm: Reply YES to continue, or describe what you see if it differs.
  ---

Do not proceed past a VISUAL CHECK REQUIRED block until the human replies.

---

## 3. Confirmation gates

Every step must end with one of these gates before proceeding:

  [CODE GATE]   — Human reviews the code diff and replies YES/NO
  [VISUAL GATE] — Human checks the browser and replies YES or describes what they see
  [BUILD GATE]  — Human confirms the build/deploy succeeded with no errors

---

## 4. Long prompt handling

If a task contains multiple objectives, extract them into a numbered checklist
at the start of your response. Work through them one at a time.
Do not batch objectives together even if they seem related.

Example format:

  Task checklist:
  [ ] 1. Confirm route file exists at src/app/players/[slug]/page.tsx
  [ ] 2. Add generateStaticParams() export
  [ ] 3. Verify data file slug matches route
  [ ] 4. Test build output

  Starting with step 1...

---

## 5. File change reporting

Every time a file is created or modified, report:

  File: [exact path]
  Action: [created / modified / deleted]
  Reason: [one sentence]
  Key change: [the specific line or block that matters]

---

## 6. Error handling

If a step fails or produces an unexpected result, STOP immediately.
Do not attempt to auto-fix without reporting the error first.
Output:

  ---
  BLOCKED
  Step: [step number and name]
  Error: [what went wrong]
  Options: [list 2-3 recovery paths for the human to choose from]
  ---

---

## 7. Scope control

Only touch files explicitly listed in the current task.
Do not refactor, rename, or "improve" anything outside the task scope.
If you notice an unrelated issue, flag it as a NOTE at the end of your
response — do not fix it without being asked.

---

## 8. Gate integrity — NO SELF-CONFIRMATION (critical)

Gates are not decorative. They are hard stops that require a human reply.

YOU MAY NEVER:
  - Issue a gate and immediately resolve it yourself
  - Cite a previous screenshot or message as gate confirmation
  - Assume a gate is passed because a prior step succeeded
  - Summarize a gate as if it were already confirmed
  - Mark any step complete without an explicit human reply in this session

A gate is only cleared when the human types a reply AFTER the gate block appears.
Any gate that was not explicitly replied to by the human is still OPEN.

If you are unsure whether a gate was confirmed, treat it as unconfirmed and re-issue it.

---

## 9. Challenge protocol

If the human replies with the word AUDIT, it means they suspect a gate was
fabricated or a step was skipped. You must immediately:

  1. List every step you claimed to complete in this session
  2. For each step, state whether you have actual evidence of completion
     (file diff, terminal output, explicit human reply) or not
  3. Re-open any gate that lacks real evidence
  4. Do not defend or explain — just audit and re-open

AUDIT is not an accusation. It is a reset. Respond to it without defensiveness.

---

## 10. Deployment control — NEVER commit, push, or deploy (critical)

The human controls all git operations and deployments. Period.

YOU MAY NEVER:
  - Run git add, git commit, git push, or any variant
  - Trigger a Vercel deployment or any CI/CD pipeline
  - Assume a fix is "live" because it works on the local dev server
  - Reference production (player-portfolio.vercel.app) as verified
    unless the human explicitly states they have deployed and confirmed it

The local dev server (localhost:3000) and the production deployment
(Vercel) are treated as completely separate environments at all times.

The scope of this agent's work is LOCAL ONLY:
  - Make file changes
  - Run the local dev server
  - Verify on localhost
  - Report results and wait

When a fix is confirmed working on localhost, end with this exact block:

  ---
  LOCAL VERIFIED
  Fix: [what was resolved]
  Tested at: localhost:3000/[route]
  Status: Ready for your review. Deploy only when you decide.
  Next step: Awaiting your decision to commit and push.
  ---

Do not suggest, prompt, or imply that the human should deploy.
That decision belongs entirely to them.
