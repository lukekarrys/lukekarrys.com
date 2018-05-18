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
- Load `icomoon.json` at [https://icomoon.io/app/#/projects](https://icomoon.io/app/#/projects)
- Add/remove fonts
- "Generate font" with existing settings
- Run the following to copy the necessary font files:
```sh
unzip lukekarryscom.zip -d font
cp -r font/fonts ~/projects/lukekarrys/lukekarrys.com/_assets
cp -r font/*.less ~/projects/lukekarrys/lukekarrys.com/_less/icomoon
cp font/selection.json ~/projects/lukekarrys/lukekarrys.com/icomoon.json
sed -i '' 's|fonts|../fonts|' ~/projects/lukekarrys/lukekarrys.com/_less/icomoon/variables.less
```
