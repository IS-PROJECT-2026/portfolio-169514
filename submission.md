# Project Submission Report

## 1. Student Details
- **Full Name:** Ayana Ndete
- **GitHub Username:** Ayana-Ndete
- **Email:** ayana.amwayi@strathmore.edu

---

## 2. Deployed Project Link
- **Live GitHub Pages URL:** https://is-project-2026.github.io/portfolio-169514/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit
- **Commit URL:** https://github.com/IS-PROJECT-2026/portfolio-169514/commit/9e8286e
- **Why this one?** It follows the conventional commit format cleanly (`feat(js):`), has a clear imperative subject under 50 characters, a structured body explaining the design decision (aria-live for accessibility, hidden on mobile), and a `Closes #8` footer for traceability.

### B. A Mistake or Struggle
- **Link to the evidence:** https://github.com/IS-PROJECT-2026/portfolio-169514/pull/20
- **What happened and how did you recover?** While completing the accessibility pass, I ran a CSS heredoc to add skip-link and focus-visible styles, but it silently failed to write to the file (a terminal paste issue), so my first commit and push only included the HTML changes. I caught it by running `git show --stat HEAD` and noticing only 1 file had changed instead of 2. I re-added the missing CSS, used `git commit --amend --no-edit` to fold the fix into the same commit, and pushed with `git push --force-with-lease` to update the still-open PR safely.

### C. A Pull Request You're Proud Of
- **PR URL:** https://github.com/IS-PROJECT-2026/portfolio-169514/pull/16
- **What did you check before merging?** I confirmed the diff only touched the projects section as intended, verified all three project cards (RAG Capstone, Smart Farm ESP32, Security System) rendered using the existing `.card`/`.tag` components from the design system rather than introducing new styles, and checked the PR correctly referenced `Closes #5`.

### D. One Thing You Would Do Differently
- **What would you change?** I would verify staged changes with `git diff --staged` or `git show --stat` immediately after every commit, rather than trusting that a multi-line heredoc or paste succeeded. I lost content silently twice during this project (a missing CSS file, and a truncated README section) because I didn't check before pushing.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/portfolio-169514/pull/20

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*
<img width="1297" height="421" alt="image" src="https://github.com/user-attachments/assets/2b1bc535-cbc0-4b49-87ed-afd91bb2e418" />


* **Caption:** Three milestones (M1: Core Structure & Design System, M2: Content & Projects Showcase, M3: Interactivity & Deployment Polish) with all 11 issues linked before development began.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1603" height="928" alt="image" src="https://github.com/user-attachments/assets/a85c0f85-3613-4405-89ef-19a3f522d7d4" />

* **Caption:** Kanban board showing all 11 issues moved through To Do, In Progress, and Done as each was completed via its own branch and PR.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1165" height="709" alt="image" src="https://github.com/user-attachments/assets/b3bac466-1e6d-4cdf-87bd-af56a8984db8" />

* **Caption:** Branch naming follows the `type/issue-number-description` convention (e.g. feat/5-project-cards, style/3-responsive-grid), with one branch per issue.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*
<img width="1504" height="977" alt="image" src="https://github.com/user-attachments/assets/6ea7d19c-03aa-4d11-834e-b329af74736c" />


* **Caption:** PR #16 (project card component) showing Closes #5 in the description, linking the PR directly to its source issue.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology
**What cause did you use?** Same-line edit conflict.

#### Step 1: Generating the Clash
<img width="812" height="429" alt="conflict_evidence_1" src="https://github.com/user-attachments/assets/c525c6a9-229a-4767-8084-75da35bb3e16" />

* **Caption:** Two branches (conflict1-a and conflict1-b) independently changed the same `--fg` CSS custom property to different color values (cyan vs magenta); merging conflict1-b with main (which had cyan already merged) triggered the collision.

#### Step 2: Inside the Code Editor (Conflict Markers)
<img width="812" height="429" alt="conflict_evidence_1" src="https://github.com/user-attachments/assets/e22a91b2-415d-4205-8a50-43dd770f0457" />

* **Caption:** Raw `<<<<<<<`/`=======`/`>>>>>>>` markers on the `--fg` line, showing magenta (HEAD) versus cyan (main). Resolved by keeping cyan since it was already merged and deployed.

#### Step 3: Resolution & Clean Merge
<img width="1504" height="977" alt="image" src="https://github.com/user-attachments/assets/1a561b85-e8b7-41c2-aef8-b16cd05cdd61" />

* **Caption:** Conflict resolved and merged cleanly via PR #24, with no leftover markers in the final file.

---

### Conflict 2 — Different Cause
**What cause did you use?** Delete/modify conflict.

**Why does this cause trigger a conflict?** One branch deleted the entire skills section from index.html, while another branch modified a line inside that same section (changing a tag from "Python" to "Python 3"). Git cannot automatically decide whether to honor the deletion or preserve the modification, since both changes are valid but mutually exclusive.

<img width="812" height="429" alt="conflict_evidence_2" src="https://github.com/user-attachments/assets/3038dc54-06c1-4d87-938c-208aa76f7c40" />

* **Caption:** Conflict between conflict2-a (deleted the skills section) and conflict2-b (modified a tag within it), resolved in PR #26 by keeping the modified section.

---

### Conflict 3 — Different Cause
**What cause did you use?** Add/add conflict.

**Why does this cause trigger a conflict?** Two branches independently added a new `<section id="testimonials">` at the same location in index.html, each with different content, without either branch knowing about the other's addition. Git flags this because it cannot determine which addition should take precedence.

<img width="812" height="429" alt="conflict_evidence_3" src="https://github.com/user-attachments/assets/be93a749-0921-482b-893e-e8498a7c233e" />

* **Caption:** Conflict between conflict3-a and conflict3-b, both adding a testimonials section with different quotes, resolved in PR #28 by combining both quotes into separate cards.

---

## 6. Feedback & Evaluation

- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.

> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
