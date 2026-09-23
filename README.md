# CC LeBlanc — Portfolio

Plain HTML and CSS, no build step. Edit a file, refresh the browser.

## Where things live

```
index.html                 Home: intro, notable projects, skills, involvement
contact.html               Contact page
engineering/
  index.html               Engineering hub (project cards)
  tire-model.html          One file per project
  suspension.html
  bf-goodrich.html
  marine-edag.html
creative/
  index.html               Creative hub
  comms-subteam.html
  graphic-design.html
  photography.html
  videography.html
css/style.css              All styling, shared by every page
images/                    Photos
resume.pdf
```

## Common edits

- **Change colors:** the variables at the top of `css/style.css` (`--ink`, `--creative`, …). The block below them is dark mode.
- **Add a project page:** copy an existing one in `engineering/` or `creative/`, rename it, change the text, then add a card linking to it in that folder's `index.html` (and on the home page if it's a notable project).
- **Add a photo:** put it in `images/`. From the home page use `images/name.jpg`; from a page inside `engineering/` or `creative/` use `../images/name.jpg`.
- **Links between pages** are relative: inside a folder, `../` goes up to the site root.
