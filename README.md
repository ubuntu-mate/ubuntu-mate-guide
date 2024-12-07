# Ubuntu MATE Guide

**A guide to Ubuntu MATE**

Written in DocBook XML V4.5 format [DocBook](http://docbook.org/xml/4.5/docbookx.dtd) - a semantic markup language for technical documentation.

## History

The version of this guide provided in Ubuntu MATE release 17.10 and earlier was written using the [Mallard](http://projectmallard.org/index.html) topic-oriented markup format. Mallard documentation consists of a set of text files for documentation presented to users with the **Yelp** help system pre-installed in Ubuntu MATE. Mallard formatting is used by several Linux applications packaged with Ubuntu MATE.

With Ubuntu MATE release 18.10 the documentation has been expanded significantly and now uses the *DocBook* format. *DocBook* is also a markup format for creating documentation presented to users with the **Yelp** help system, however the entire documentation is contained in a single file named `index.docbook`. This format appears to be preferred in documentation produced for applications produced by the MATE project. Although the presentation in the help system is slightly different, both the *DocBook* format and the *Mallard* format for documentation can link to one-another and interact nicely in **Yelp**.

The most recent update to the guide incorporates new applications and features of **Ubuntu MATE release 22.04**.

## Translations

The documentation is only in English at the moment.

## Contributing

### Setting up the DocBook Writing Environment

First, as long as you have a text editor, you have all the tools you need to create the documentation.

Most text editors, like **Pluma**, have the ability to set the "Highlight Mode" to provide syntax highlighting for DocBook XML files. When using **Pluma**, you select *View > Highlight Mode > Markup > DocBook*.

When you save the file with the `.docbook` extension, the next time you open the file in the text editor, it will be highlighted correctly so that you can continue editing.

### Clone the files

```shell
git clone git@github.com:ubuntu-mate/ubuntu-mate-guide.git
```

or if you prefer to use `gh`

```shell
gh repo clone ubuntu-mate/ubuntu-mate-guide
```

### Reducing the size of graphics files

Graphics files contained in the /apps and /figures folders. To reduce the size of png and jpg files, use these two commands:

```shell
jpegoptim --strip-all -t *.jpg
optipng -strip all -o7 *.png
```

### Testing the index.docbook file

The entire ubuntu-mate-guide is contained in the file `index.docbook`, with graphics files contained in the /apps and /figures folders. To test the file, open it in **Yelp**:

```shell
yelp index.docbook
```

### File location in Ubuntu MATE

The `index.docbook` file is simply placed in this location:

    /usr/share/help/C/ubuntu-mate-guide/index.docbook

Translations are placed in `/usr/share/help/<language>/ubuntu-mate-guide/index.docbook` (where `<language>` is the standard two-letter language code).

It is available to install via the [ubuntu-mate-guide package](https://packages.ubuntu.com/noble/ubuntu-mate-guide) in the Ubuntu repositories.


## Testing

### PDF Conversion

Install these command-line utilities: `pandoc` `texlive-xetex` and `texlive-fonts-extra` (and dependencies) from the Ubuntu MATE repositories and use **pandoc** to convert the docbook file to markdown and then from markdown to pdf:

```shell
pandoc -f docbook -t markdown -s index.docbook -o UMGuide.md
pandoc UMGuide.md  --pdf-engine=xelatex -o UMGuide.pdf
```

### HTML Conversion

The `pandoc` application can also used to create a HTML version used as the basis for the online version at [http://guide.ubuntu-mate.org](http://guide.ubuntu-mate.org).

An HTML file can be created from the markdown file with this command:

```
pandoc -s UMGuide.md -o UMGuide.html
```

## guide.ubuntu-mate.org

The code for generating the online version of the guide is stored in the `online` folder.
Successful builds will be published at <https://guide.ubuntu-mate.org> for immediate viewing.

To build from the repository folder, run:

    ./online/build.sh

Then, open the resulting `online/build/index.html` in your web browser.

Changes merged into this repository (against the `master` branch) will be automatically published.


## License

[Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE)
