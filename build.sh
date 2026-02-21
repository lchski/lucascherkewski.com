# Assets

## Create directories
mkdir assets
mkdir assets/css

## CSS
# Inline @import statements into a single file; Jekyll excludes _* directories
# so the _css partials would otherwise be missing from the built site.
{
  while IFS= read -r line; do
    if [[ "$line" =~ ^@import\ \'_css/(.+)\'\; ]]; then
      cat "_assets/_css/${BASH_REMATCH[1]}"
    else
      echo "$line"
    fi
  done < _assets/main.css
} > assets/css/main.css

## Images
cp -r _assets/_images assets/img/

## Files
cp -r _assets/_files assets/files/



# Build site
jekyll build
