# jQuery Expander

This module is a port to Backdrop of the Drupal contributed module
'jQuery Expander' version 7.x-1.0.

The Expander Plugin is a simple jQuery plugin to hide/collapse a
portion of an element's text and add an "expand" link so that the text
can be viewed by the user if he or she wishes. By default, the
expanded text is followed by a "collapse" link.

This module makes use of the jQuery library to provide a new display
format 'expander' for long text fields. This can be selected from the
field display options for a custom content type.

Various settings are available within the jQuery library and these are
described in the file readme.md that comes with the library.


## Status

This module is working in Backdrop, provided the full rather than
minimised version of the jQuery library file is used.


## Installation

Install this module as usual, also the Libraries module if not already
installed, then add the required javascript library a folder
/libraries/jquery.expander.


## Usage

Once the module and the library are installed, create a new content
type to include a text (long) field, and in 'manage display' for this
field select format 'expander'. 'Configure' then allows some changes
to the expander settings.

Other changes may be made directly in the library javascript.
For example, by setting the value of a parameter 'sliceOn' one
can set a string of characters at which the contents are sliced.


## License

This project is GPL v2 software. See the LICENSE.txt file in this
directory for complete text.
    
    
## Current Maintainers

### For Drupal:

  + Matthias Hutterer (mh86)
  + Amitai Burstein (amitaibu)
  + Tigran Vardanyan (tiko)

### Port to Backdrop:

  + Graham Oliver (github.com/Graham-72)


## Acknowledgement

This port to Backdrop would not, of course, be possible without all
the work done by the developers and maintainers of the Drupal module.