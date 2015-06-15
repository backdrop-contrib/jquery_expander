(function ($) {

/**
 * jQuery expander.
 */
Backdrop.behaviors.jqueryExpander = {
  attach: function (context) {
  
    var expander = Backdrop.settings.jqueryExpander;
      // Add the jQuery expander.
      for (var key in expander) {
        $('.field-expander-' + key).expander(expander[key]);
      }
    }
};

})(jQuery);
