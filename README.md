# CC LeBlanc — Portfolio

Plain HTML and CSS, no build step. Edit a file, refresh the browser.

## Where things live

```
index.html                 Home: intro, notable projects, skills, involvement
contact.html               Contact page
engineering/
  index.html               Engineering hub (project cards)
  tire-model.html          One file per project
  suspension.html          (drafts branch only)
  bf-goodrich.html         (drafts branch only)
  marine-edag.html         (drafts branch only)
creative/                  (drafts branch only) Creative hub + project pages
css/style.css              All styling, shared by every page
images/                    Photos
resume.pdf
```

## Common edits

- **Change colors:** the variables at the top of `css/style.css` (`--ink`, `--creative`, …). The block below them is dark mode.
- **Add a project page:** copy an existing one in `engineering/` or `creative/`, rename it, change the text, then add a card linking to it in that folder's `index.html` (and on the home page if it's a notable project).
- **Add a photo:** put it in `images/`. From the home page use `images/name.jpg`; from a page inside `engineering/` or `creative/` use `../images/name.jpg`.
- **Links between pages** are relative: inside a folder, `../` goes up to the site root.

## Branches: `main` is live, `drafts` is everything

- **`main`** is the public website (GitHub Pages publishes it). It only has
  finished pages. Anything pushed here goes live.
- **`drafts`** has every page, finished or not, with all cards linked, so you
  can preview the whole site. It's backed up on GitHub but not published.
  (The repo is public, so drafts can still be read on GitHub itself.)

Work on `drafts`. In PyCharm, switch branches from the branch name in the
bottom-right corner (or top-left in the new UI). Switching branches swaps
the files in the folder, so draft pages disappear while you're on `main`.
That's expected.

### Publishing a finished page

Don't merge all of `drafts` into `main` (that would publish every draft).
Bring over just the finished page:

```
git switch main
git checkout drafts -- engineering/suspension.html
```

Then add its card to `engineering/index.html` (and the home page if it's a
notable project) on `main`, commit, push, and `git switch drafts` to keep
working.

To pull changes you made on `main` into `drafts`:
`git switch drafts` then `git merge main`.
