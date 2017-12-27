# Contributing to Ubuntu Mate Guide

## Writing Mallard documents with Pug 

Let's "Take the Dog to hunt the Duck" shall we. 

Pug (aka jade) is a kind of shorthand for writing xml/html documents. 

To get started install Node.js:

install Node.js

```
sudo apt install nodejs
```

install pug and pug-cli

```
sudo npm install -g pug && sudo npm install -g pug-cli
```

create a pug settings directory

```
mkdir ~/.pug
```

specify options for mallard page format

```
echo '{"doctype": "page"}' > ~/.pug/options-page.json
```

provide localtion of the options file, add file extension with -E and -P flag for pretty

```
pug -O ~/.pug/options-page.json -E "page" -P
```

put it in your bashrc alias

```
alias ppage='pug -O ~/.pug/options-page.json -E "page" -P'
```p

convert your pug file to page mallard format

```
ppage new-page.pug
```

this generates .page document with the same name

Previewing documentation:

```
yelp --editor-mode new-page.page
```

About Pug: https://pugjs.org/api/getting-started.html
About Mallard: http://projectmallard.org/
about
Side Note to Editors: Pug is indentation sensitive, if you are using VS Code it is recomended to use something like **indent-rainbow** plugin as well as **jadeview** (to convert existing xml/html i.e *.page* files to *.jade/.pug*). 
