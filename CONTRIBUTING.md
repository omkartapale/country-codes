# Contribution Guidelines

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF-CONDUCT.md). By participating in this project you agree to abide by its terms.

---
## Guidelines
Ensure your pull request adheres to the following guidelines:

### Commits
- Separate subject from body with a blank line.
- Limit the subject line to 50 characters.
- Capitalize the subject line. Do not end the subject line with a period. 
- Wrap the body at 72 characters. Use the body to explain what and why vs. how.
- Mood: Use imperative mood in the subject line. Example – `Add fix for dark mode toggle state`. Imperative mood gives the tone you are giving an order or request.
- Specify the type of commit. It is recommended and can be even more beneficial to have a consistent set of words to describe your changes. Example: `Bugfix`, `Update`, `Refactor`, `Bump`, and so on. See the section on Commit Types below for additional information.
- It is also a good location to utilize `BREAKING CHANGE: <description>` to note the reason for a breaking change within the commit.
- The footer is also optional. We use the footer to link the issues that would be closed with these changes. Example: `Closes #<issue_number>`.

### Pull Requests (PR)
- Don't open a Draft / WIP pull request while you work on the guidelines. A pull request should be 100% ready and should adhere to all the guidelines when you open it.
- Make an individual pull request for each suggestion.
- Make use of Commits guidelines for subject and body messages.
- The pull request should have a useful title.
- Keep descriptions short and simple, but descriptive.
- The description should not be marketing taglines.
- The description should not be title-case.
- The description should not repeat the item title.

### Issues
- Search previous suggestions/issues before making a new one, as yours may be a duplicate.
- New categories or improvements to the existing categorization are welcome, but should be done in a separate pull request.

### Others
- The suggestion should be in English.
- Check your spelling and grammar. You can use ChatGPT for this!
- Make sure your text editor is set to remove trailing whitespace.


## Commit Types
The commit type subject line should be all lowercase with a character limit to encourage succinct descriptions. The commit type can include the following:

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit

## Linking a pull request to an issue using keyword
You can link an issue to a pull request manually or using a supported keyword in the pull request description.

When you link a pull request to the issue the pull request addresses, collaborators can see that someone is working on the issue.

When you merge a linked pull request into the default branch of a repository, its linked issue is automatically closed.

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message. The pull request must be on the default branch.

`close`, `closes`, `closed`,
`fix`, `fixes`, `fixed`,
`resolve`, `resolves`, `resolved`

## Updating your PR

A lot of times, making a PR adhere to the standards above can be difficult. If the maintainers notice anything that we'd like changed, we'll ask you to edit your PR before we merge it. If you're not sure how to do that, [here is a guide](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) on the different ways you can update your PR so that we can merge it.

---
### Thank you for your suggestion!
