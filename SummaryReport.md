QA Summary Report
Game Tested: Tickle the Pickle

Dev Team:(https://github.com/alexkurcan/Sprint-1)

QA Team: Nayan, Quint, Kahni, Gauhar

Testing Period: Week 6 (Tue–Fri)

Report Date: 2/13/26

Executive Summary
We conducted comprehensive QA testing on Tickle the Pickle over 4 days. Our team tested [X core features], ran [Y test scenarios], and filed [Z GitHub Issues] documenting bugs across all severity levels.

Key Finding: [One sentence summary — e.g., "The core game loop works, but input validation needs attention."]

## Testing Overview
### What We Tested
- Happy path (normal gameplay) ✓
- Input validation & edge cases ✓
- Win/lose conditions ✓
- State management ✓
- Complex scenarios & sequences ✓
### Coverage Summary
#### Features Tested: 
- Shooting Upward
- Special Key for Upgrade
- Enemy Movement Pattern
- Player Movement
- Live Score System
#### Test Types:
- Functional testing (does it work?)
- Negative testing (what breaks it?)
- Boundary testing (edge values)
- Exploratory testing (creative scenarios)
## Bug Summary
### By Severity
- Critical: [#] bugs (game-breaking)
- High: 3 bugs (core features broken)
- Medium: 1 bugs (partial functionality issues)
- Low: 2 bugs (cosmetic or minor edge cases)
##### Total Bugs Filed: 9

By Category
Input Validation: [#] bugs
Logic Errors: [#] bugs
State Management: [#] bugs
UI/UX Issues: [#] bugs
Other: [#] bugs

## Critical Issues (Must Fix Before Handoff)
#### These bugs prevent the game from being playable or break core mechanics.

### Issue 1

Ending screen after boss fight is not visible with the natural browser zoom of the game

Low Serverity and Priority

### Steps to Reproduce
- Open game on Chrome web browser
- Click to start game
- Beat all 3 waves of pickles and defeat boss
- Zoom out using "ctrl" + "-"
- Observe the ending score and screen are hidden

[[Link]](https://github.com/Khanbite/sprintqa/issues/2)

### Issue 2

Pickle Soldiers and Vampire images are not fully transparent even with clipart image 

Low Serverity and Priority

### Steps to Reproduce
- Open game on Chrome web browser
- Click to start game
- Observe the vampire and pickle soldiers are not fully transparent

[[Link]](https://github.com/Khanbite/sprintqa/issues/3)

High-Priority Issues (Fix ASAP)
These bugs affect core features but don't prevent gameplay.

### Bug 1

Pickle Soldiers do not hurt you when they collide with the player

High

[[Link]](https://github.com/Khanbite/sprintqa/issues/5)

### Bug 2

Game does not end when the pickles get to the bottom of the screen 

High

[[Link]](https://github.com/Khanbite/sprintqa/issues/6)

### Bug 3

Players cannot move up/down

High

[[Link]](https://github.com/Khanbite/sprintqa/issues/7)

## Medium & Low Priority Issues
### Documented in GitHub Issues. These can be deferred or fixed in sequence.

## Testing Insights
## What Worked Well
- [Feature X performed as expected]
- [Code quality made testing easier]
- [Clear documentation helped understanding]
## Areas for Improvement
- [Input validation is weak]
- [State management has logic errors]
- [Error messages are unclear]
## Patterns Noticed
### [Did bugs cluster in certain areas? Did specific input types break the game?]

## Recommendations for Dev Team
### Critical Fixes (Priority 1)
- Fix [Issue X] — affects [feature]
- Fix [Issue Y] — prevents [win/lose condition]
## Important Fixes (Priority 2)
- Improve input validation in [feature]
- Fix state tracking in [feature]
## Polish/Optional Fixes (Priority 3)
- [Cosmetic improvements]
- [Nice-to-have enhancements]
## Test Environment
- Platform: Python terminal

- Game Version: [Commit hash or date]

- Testing Tools: Manual testing + GitHub Issues

## All GitHub Issues
### Complete list of filed bugs: See dev team repo for all open GitHub Issues tagged qa-week6

- Total: [#] issues

- Closed: [#] (if dev team fixed any during testing)

- Open: [#] (for dev team to fix in Week 7)

## Conclusion
- [Summary of testing effort and findings. One paragraph.]

- The game has [#] documented issues ranging from critical to cosmetic. With focused effort on critical bugs, the core gameplay loop is playable. Input validation and state management are the areas needing most attention.

## QA Team Sign-Off
#### Test Lead: 
[Name]

#### Submitted: 
[Date/Time]

#### Team Members:

Nayan
Khnai
Gauhar
Quint
## Appendix: Detailed Test Scenarios
### Scenario 1: [Happy Path]
- Result: [Passed / Failed / Partial]

- Notes: [What did we learn?]

### Scenario 2: [Input Validation]
- Result: [Passed / Failed / Partial]

- Notes:

### Scenario 3: [Edge Cases]
- Result: [Passed / Failed / Partial]

- Notes:

## Questions for Dev Team (If Applicable)
### If there were ambiguities in how the game should work, note them here so dev team can clarify in Week 7:

- [Question about mechanic X]
- [Unclear behavior in feature Y]
End of Report
