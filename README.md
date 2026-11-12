# Ahmed: personal site (2026–2027)

One-page static site. No build step, no dependencies, no runtime network calls.

## Structure
- `site/index.html`: page shell, hero, about, footer
- `site/assets/data.js`: **all editable content** (profiles, stages, projects, principles, links)
- `site/assets/app.js`, `style.css`: rendering and styles
- `.github/workflows/pages.yml`: GitHub Pages deploy
- `.gitlab-ci.yml`: GitLab Pages deploy

## Local development
```sh
python3 -m http.server -d site 8000   # then open http://localhost:8000
```
The site also opens directly from `site/index.html`.

## Deploy to GitHub Pages
1. Push to `main` or `2027-Version` (both trigger the workflow).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow publishes `site/`. All asset paths are relative, so it works at `https://Ahmed-Roshdi.github.io/info/` and at a custom domain root.

## Deploy to GitLab Pages
Push to the default branch; `.gitlab-ci.yml` copies `site/` to `public/`.

## Content model
`site/assets/data.js` holds `profiles` (GitHub, GitLab), `stages` (learning path: Current, Next, Later), `projects`, `principles`, and `otherLinks`. Project fields: `name`, `platform`, `category`, `description`, `technologies`, `status`, `url`, `visibility`, `featured`, `learningOutcome` (plus `context`, `sequence`, `scope` for the featured project). `visibility` accepts `public`, `private-profile`, `archived`, `operational`, `maintenance-paused` (string or array). Private repositories must never be listed as projects.

## Items to keep checking
| Item | Where | State |
|---|---|---|
| Learning outcomes | `data.js` > `projects[].learningOutcome` | Omitted; none supplied |
| Status of the three non-featured repos | `data.js` > `projects[].status` | Omitted; none supplied |
| GitLab profile | `data.js` > `profiles.gitlab.url` | Set; the profile is private, so visitors may see a login or 404 page |

No health information, titles, credentials, employment, or achievements appear anywhere on the site.

## Validation checklist
- Resize to ~360, ~768, ~1280 px; no horizontal scroll.
- Click every internal anchor and external link once URLs are set.
- Tab through the whole page: skip link first, visible focus ring on every link.
- Enable "reduce motion" in the OS: smooth scrolling should turn off (the site has no other animation).
- Open DevTools console: no errors or CSP violations.
- After deploy, load the Pages URL and confirm CSS, JS, and anchors work under the `/info/` subpath.
- Read the final text once for any unverified personal claim.
