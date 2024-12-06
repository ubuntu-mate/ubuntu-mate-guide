#!/bin/bash -e
#
# Builds a custom HTML copy of the guide for online viewing at:
# https://guide.ubuntu-mate.org
#

cd "$(dirname "$0")"

# Prepare build directory
if [ -d "build" ]; then
    rm -rf build
fi
mkdir build

# Check dependencies and source is present
if [ -z "$(which pandoc)" ]; then
    echo "Please install 'pandoc' and try again."
    exit 1
fi

if [ ! -f "../index.docbook" ]; then
    echo "Could not find the docbook. Is this the correct directory?"
    exit 1
fi

# Convert docbook to HTML
echo "Converting docbook to HTML..."
pandoc -f docbook -t html5 -s -o build/_tmp_index.html ../index.docbook

echo "Processing HTML..."

# Strip the HTML so we're left with just the body
TMP_BODY="build/_tmp_body.html"
awk '/<body>/{p=1} p; /<\/body>/{p=0}' build/_tmp_index.html > $TMP_BODY

# Replace <body> elements with <div id="docbook">
sed -i 's|<body>|<div id="docbook">|' $TMP_BODY
sed -i 's|</body>|</div>|' $TMP_BODY

# Append "rel" attribute for external links
sed -i 's|<a href="http|<a rel="external" href="http|g' $TMP_BODY

# Add classes to images
sed -i 's|<img src="apps/|<img class="app-icon" src="apps/|g' $TMP_BODY
sed -i 's|<img src="figures/|<img class="figure" src="figures/|g' $TMP_BODY


# Put it all together
cat <<EOF > build/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  $(cat partials/head.html)
  <style>
    $(cat partials/guide.css)
  </style>
</head>
<body>
    $(cat partials/header-nav.html)
    $(cat $TMP_BODY)
    <script>
      $(cat partials/guide.js)
    </script>
</body>
</html>
EOF

echo "Copying assets..."
cp -r assets build/
cp -r ../apps build/
cp -r ../figures build/
rm build/_tmp_*

echo "Done!"
