---
title: Bug report Guideline
---

### Sample template
Bug Title:  
Step to reproduce:  
Actual result:  
Expected result:  
Effect version:  
Fix in version:  

## Short summary (Bug Title)

The short summary of a bug report is the most maaccessible way of figuring out what the reported issue is. This is the first impression and it usually influences the overall quality of the bug report.

The summary **must be short and must describe the issue in a few keywords.**

Examples:
 - **Not good enough:**  
“Incorrect products displayed in Favoritos”
   - This example shows an incomplete description of the issue.
   - Why are those products incorrect? What actions have you performed before seeing they’re displayed there?

 - **Good:**  
“Products from the “Favoritos” section are still displayed after removing them”

## Steps to reproduce

The steps to reproduce are a key component of the bug report. These instruct the reader as to how they should reproduce the issue.

**If the steps to reproduce are not clear enough, the moderator will not be able to reproduce the issue and it will be rejected.**
 - The steps to reproduce need to provide full visibility on the actions the tester has taken up to the encountered issue;
 - The steps to reproduce need to have only 1 action per step;
 - The steps to reproduce need to end with a step similar to the Short summary, so that the issue is clear;
 - “Observe” is not a complete/valid step;
 - Steps to reproduce can’t be actions described from a first-person perspective: “1. I open the app. 2. I observe this”;

### Examples:
**Not good enough:**  
1. Launch the app and log in
2. Observe

**Good:**  
1. Launch the app
2. Login
3. Observe the Home Screen is shown instead of the Welcome screen

## Actual results
The Actual Results field represents the behavior encountered in the app when/after performing certain actions.
 - The Actual results field should be different and more explicit than the Short Summary, but it can also be the same if the issue doesn’t require lots of explanations.
 - The Actual results field needs to describe the actions taken before encountering the issue as well as the issue itself. An actual result that only points out the issue is **not good enough.**

### Examples:
**Not good enough:**  
“The Products in Favorites are still displayed”
 - This Actual results example isn’t good enough because it doesn’t describe the actions performed before encountering the issue.
 - You should answer the question: Why is it an issue that the Products are still displayed? -> Because you previously removed them. You must include the action taken before encountering the issue.

**Good:**  
“After removing a product from the “Favorites” section, the product is still displayed in the “Favorites” section.”
 - We advise being as specific as possible when filling the required fields.

## Expected results
The Expected Results field represents the behavior the app is expected to show. If you’re tapping on a picture on the Facebook Newsfeed, the expected behavior is for the picture to be enlarged/zoomed in.

 - The Expected results field needs to describe the actions taken before encountering the behavior, not only the behavior itself. An Expected Results field that only points out that “X thing shouldn’t happen” is Not good enough.

### Examples:
**Not good enough:**   
“The Products in Favorites not displayed”
 - This Expected Results example is not good enough because it doesn’t provide any details as to what is expected to happen;
 - You should also answer the question: “Why shouldn’t the Products be displayed anymore?”;

**Good:**  
“The Products from “Favorites” shouldn’t be displayed after removing them.”

**We advise being as specific as possible in filling the required fields.**

## Attachments
It’s crucial for you to provide proof for the bugs you report, such as screenshot or screen recording video
