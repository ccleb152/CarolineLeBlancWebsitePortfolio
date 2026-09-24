# CC LeBlanc — Portfolio

Plain HTML and CSS, no build step. Edit a file, refresh the browser.

## Where things live

```
index.html                 Home: intro, notable projects, skills, involvement
contact.html               Contact page
engineering/
  index.html               Engineering hub (project cards)
  tire-model.html          One file per project
  suspension.html          (draft)
  bf-goodrich.html         (draft)
  marine-edag.html         (draft)
creative/                  (draft) Creative hub + project pages
drafts/                    (draft) notes, e.g. cards-to-restore.html
css/style.css              All styling, shared by every page
images/                    Photos
resume.pdf
```

## Common edits

- **Change colors:** the variables at the top of `css/style.css` (`--ink`, `--creative`, …). The block below them is dark mode.
- **Add a project page:** copy an existing one in `engineering/` or `creative/`, rename it, change the text, then add a card linking to it in that folder's `index.html` (and on the home page if it's a notable project).
- **Add a photo:** put it in `images/`. From the home page use `images/name.jpg`; from a page inside `engineering/` or `creative/` use `../images/name.jpg`.
- **Links between pages** are relative: inside a folder, `../` goes up to the site root.

## Drafts (work in progress, not public)

Everything pushed to `main` goes live, and this repo is public. Unfinished
pages are listed under **Drafts** in `.gitignore`, so Git never uploads them:
they exist only on this computer. Preview them locally (in PyCharm,
right-click the file → Open In → Browser).

To publish a draft page:

1. Delete its line under "Drafts" in `.gitignore`.
2. Paste its cards back from `drafts/cards-to-restore.html` into the hub
   page (and the home page, if it's a notable project).
3. Commit and push to `main`.

Drafts aren't backed up to GitHub, so keep a copy somewhere else (OneDrive, etc.).
