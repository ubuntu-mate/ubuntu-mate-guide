# ubuntu-mate-guide

A guide to Ubuntu MATE

Written in DocBook XML V4.5 format [DocBook](http://docbook.org/xml/4.5/docbookx.dtd) - a semantic markup language for technical documentation. 

## History

The version of this guide provided in Ubuntu MATE release 17.10 and earlier was written using the [Mallard](http://projectmallard.org/index.html) topic-oriented markup format. Mallard documentation consists of a set of text files for documentation presented to users with the **Yelp** help system pre-installed in Ubuntu MATE. Mallard formatting is used by several Linux applications packaged with Ubuntu MATE.

With Ubuntu MATE release 18.10 the documentation has been expanded significantly and now uses the *DocBook* format. *DocBook* is also a markup format for creating documentation presented to users with the **Yelp** help system, however the entire documentation is contained in a single file named `index.docbook`. This format appears to be preferred in documentation produced for applications produced by the MATE project. Although the presentation in the help system is slightly different, both the *DocBook* format and the *Mallard* format for documentation can link to one-another and interact nicely in **Yelp**.

The most recent update to the guide incorporates new applications and features of Ubuntu MATE release 20.04 LTS.

----------
## Translations

The documentation is only in English at the moment. 

----------
## Setting up the DocBook Writing Environment

First, as long as you have a text editor, you have all the tools you need to create the documentation. 

Most text editors, like **Pluma**, have the ability to set the "Highlight Mode" to provide syntax highlighting for DocBook XML files. When using **Pluma**, you select *View > Highlight Mode > Markup > DocBook*. 

When you save the file with the `.docbook` extension, the next time you open the file in the text editor, it will be highlighted correctly so that you can continue editing.

### Clone the files

    mkdir ~/ubuntu-mate-guide
    cd ~/ubuntu-mate-guide
    git clone git@bitbucket.org:ubuntu-mate/ubuntu-guide.git

----------
## Reducing the size of graphics files

Graphics files contained in the /apps and /figures folders. To reduce the size of png and jpg files, use these two commands:
``` 
jpegoptim --strip-all -t *.jpg
optipng -strip all -o7 *.png
```

----------
## Testing the index.docbook file

The entire ubuntu-mate-guide is contained in the file `index.docbook`, with graphics files contained in the /apps and /figures folders. To test the file, open it in **Yelp**:

``` 
yelp index.docbook
```

----------
## File location in Ubunt MATE

The `index.docbook` file is simply placed in this location `/usr/share/help/C/ubuntu-mate-guide/index.dobook`. Translations are placed in `/usr/share/help/<language>/ubuntu-mate-guide/index.docbook` where `<language>` is the standard two-letter language code.

----------
## PDF Conversion

Install these command-line utilities: `pandoc` `texlive-xetex` and `texlive-fonts-extra` (and dependencies) from the Ubuntu MATE repositories and use **pandoc** to convert the docbook file to markdown and then from markdown to pdf:

```
pandoc -f docbook -t markdown -s index.docbook -o UMGuide.md
pandoc UMGuide.md  --pdf-engine=xelatex -o UMGuide.pdf
```

----------
## HTML Conversion

The `pandoc` application is also used to create the online publication of the Ubuntu MATE Guide at [http://guide.ubuntu-mate.org](http://guide.ubuntu-mate.org).

Further information can be found here: 
[https://github.com/ubuntu-mate/guide.ubuntu-mate.org](https://github.com/ubuntu-mate/guide.ubuntu-mate.org)

An HTML file can be created from the markdown file with this command:

```
pandoc -s UMGuide.md -o UMGuide.html
```

