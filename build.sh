# Assets

## Create directories
mkdir assets
mkdir assets/css

## CSS
cp _assets/main.css assets/css/main.css
cp -r _assets/_css assets/css/

## Images
cp -r _assets/_images assets/img/

## Files
cp -r _assets/_files assets/files/



# Build site
jekyll build
