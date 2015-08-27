lukekarrys.com
=======================

[ ![Codeship Status for lukekarrys/lukekarrys.com](https://codeship.com/projects/ea0027e0-2f2e-0133-7c94-7e8cf4505288/status?branch=master)](https://codeship.com/projects/99327)

- `npm install`

**Dev**
- `npm start`

**Deploy**
- `npm run build`
- `npm run deploy`

**Lint**
- `npm run lint`

**Fonts**
- Load `.icomoon.json` at [https://icomoon.io/app/#/projects](https://icomoon.io/app/#/projects)
- Add/remove fonts
- "Generate font" (with existing settings probably)
- Within downloaded directory
  - Copy `fonts` to `_assets/fonts`
  - Copy `style.css` to `_less/iconfont.less`
  - Update font paths to start with `../fonts/`
  - Copy `selection.json` to `.icomoon.json`