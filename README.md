# ubuntu-mate-guide

A guide to Ubuntu MATE

Written in DocBook XML V4.5 format [DocBook](http://docbook.org/xml/4.5/docbookx.dtd) - a semantic markup language for technical documentation. 

## History

The version of this guide provided in Ubuntu MATE release 17.10 earlier was writtten using the [Mallard](http://projectmallard.org/index.html) topic-oriented markup format. Mallard documentation consists of a set of text files for documentation presented to users with the **Yelp** help system pre-installed in Ubuntu MATE. Mallard formatting is used by several Linux applications packaged with Ubuntu MATE.

With Ubuntu MATE release 18.10 the documentation has been expanded significantly and now uses the *DocBook* format. *DocBook* is also a markup format for creating documentation presented to users with the **Yelp** help system, however the entire documentation is contained in a single file named `index.docbook`. This format appears to be preferred in documentation produced for applications produced by the MATE project. Although the presentation in the help system is slightly different, both the *DocBook* format and the *Mallard* format for documentation can link to one-another and interact nicely in **Yelp**.

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
## Testing the index.docbook file

The entire ubuntu-mate-guide is contained in the file `index.docbook`. To test the file, open it in **Yelp**:

``` 
yelp index.docbook
```

----------
## File location in Ubunt MATE

The `index.docbook` file is simply placed in this location `/usr/share/help/C/ubuntu-mate-guide/index.dobook`. Translations are placed in `/usr/share/help/<language>/ubuntu-mate-guide/index.docbook` where `<language>` is the standard two-letter language code.

----------
## PDF Conversion

To be completed
