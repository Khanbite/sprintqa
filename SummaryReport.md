# QA Summary Report

## Game Tested: Tickle the Pickle

## Dev Team: Echo of Terminal 7

## QA Team: Khani, Quint, Nayan, Gauhar

## Testing Period: Week 6 (Tue–Fri)

## Report Date: 2/13/

# Executive Summary

We conducted comprehensive QA testing on Tickle the Pickle over 4 days. Our team tested 5
core features, ran 20+ test scenarios, and filed 9 GitHub Issues documenting bugs across all
severity levels.

**Key Finding:** The core game works, but input validation, state management, and feature

## implementation needs work.

# Testing Overview

# What We Tested

- Happy path (normal gameplay) ✓
- Input validation & edge cases ✓
- Win/lose conditions ✓
- State management ✓
- Complex scenarios & sequences ✓

# Coverage Summary

- **Features Tested:** [List core features and % coverage]
    o Core gameplay loop: 100% tested
    o Boss fight mechanics: 100 % tested
    o Player controls and inputs: 95%
    o Upgrade System: 95%
    o Game State: 95%
- **Test Types:** [Types of testing we did]
    o Functional testing (does it work?)
    o Negative testing (what breaks it?)
    o Boundary testing (edge values)


```
o Exploratory testing (creative scenarios)
```
# Bug Summary

# By Severity

- **Critical:** 0 bugs (game-breaking)
- **High:** 5 bugs (core features broken)
- **Medium:** 1 bug (partial functionality issues)
- **Low:** 3 bugs (cosmetic or minor edge cases)

## Total Bugs Filed: 9

# By Category

- **Input Validation: 2** bugs
- **Logic Errors:** 3 bugs
- **State Management:** 1 bug
- **UI/UX Issues:** 2 bugs
- **Other:** 1 bug

# High-Priority Issues (Fix ASAP)

## These bugs affect core features but don't prevent gameplay.

## # Title Severity GitHub Issue

## 1

```
No screen
displaying that
you cannot
upgrade with
the incorrect
amount of
```
## points

## High https://github.com/Khanbite/sprintqa/issues/

## 2

```
Upgrade ‘p’
does not
increase
damage/fire
more
```
## projectiles

## High https://github.com/Khanbite/sprintqa/issues/


# Medium & Low Priority Issues

Documented in GitHub Issues. These include things like transparency issues and missing
feedback for insufficient points needed for upgrade.

# Testing Insights

# What Worked Well

- Pause and reset
- Core gameplay loop
- README fairly informational
- Testing was straightforward

# Areas for Improvement

- Input validation was weak
- Some features mentioned in README not included
- Game Over screen not clearly there

# Patterns Noticed

## Many of the bugs are logic and input validation bugs.

# Recommendations for Dev Team

# Critical Fixes (Priority 1)

1. Fix Pickles Not Ending the game when at the bottom of the screen — Soft locks the
    game, impossible to lose/win.

# Important Fixes (Priority 2)

1. Allow Arrow Keys to move
2. Allow user to reset whilst playing
3. More detailed README (Include Information on Boss Fight, don’t include any features
    not in the game, explain that p is for upgrading instead of just “special key”, add info on
    esc to pause, etc.)
4. Allow user to quit.

# Polish/Optional Fixes (Priority 3)

1. Be able to continue the game after beating the boss. Boss fight at every 4th interval.
2. Boss Fight Improved Difficult (Health is fine, make it Fire Lasers significantly faster)
3. Sprites more visible/transparent.
4. Upgrade Key at S key instead of P key for easier click.
5. Total Score (Without taking upgrades into account) counter.


6. Difficulty options or some way to increase/decrease lives.
7. Time after getting hit when player is temporarily invulnerable to prevent hit chains. (?)
8. Making it clear when a hit is taken (flashing red/white)
8.9. Fire Something Instead of Lasers (?)
9.10. More Enemy Types (?)

# Test Environment

**Platform:** Python terminal / GitHub webpage

**Game Version:** 2/9/

## Testing Tools: Manual testing + GitHub Issues

# All GitHub Issues

## Complete list of filed bugs: See dev team repo for all open GitHub Issues

**Total:** 9 issues

## Closed: 0

## Open: 9

# Conclusion

Testing has revealed that while the basic gameplay loop is functional, there are several high
severity logic and state management bugs preventing the game from being realized.
Approximately 9 issues were documented ranging from high to low/cosmetic. With focused
effort on high priority bugs, the game can become playable. Input validation and incomplete

## features require the most attention.

# QA Team Sign-Off

**Test Lead:** Khani

## Submitted: 2/13/

## Team Members:

## Khani

Quint
Nayan
Gauhar


# Appendix: Detailed Test Scenarios

# Scenario 1: Beating the boss (Happy path)

## Result: Passed

**Notes:** You can win the game, but the End Screen is not visible on the default zoom.

# Scenario 2: Input Validation

## Result: Partial

**Notes: Quit key non-existent, upgrade, reset, and escape buttons good**

# Scenario 3: Edge Case

## Result: Failed

**Notes: Game doesn’t end when pickles reach the bottom of the screen. Boss hitbox**

## inaccurate.

# Questions for Dev Team (If Applicable)

If there were ambiguities in how the game should work, note them here so dev team can clarify

## in Week 7:

- The README mentioned the player being able to move up, down, left and right. Was this
    supposed to be implemented in the game?

## End of Report

