# Assets

## Create directories
mkdir assets
mkdir assets/css
mkdir assets/img
mkdir assets/files

## CSS
cd _assets/_tachyons
npm install
npm run build

## Images
cd ../..
cp -r _assets/_images assets/img/

## Files
cp -r _assets/_files assets/files/



# Build site
jekyll build
