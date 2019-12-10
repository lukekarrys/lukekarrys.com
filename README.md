lukekarrys.com
=======================

- `npm install`

**Dev**
- `npm start`

**Build**
- `npm run build`

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
