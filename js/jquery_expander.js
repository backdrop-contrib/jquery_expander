(function ($) {

/**
 * jQuery expander.
 */
Drupal.behaviors.jqueryExpander = {
  attach: function (context) {
  
    var jqueryExpander = Drupal.settings.jqueryExpander;
      // Add the jQuery expander.
      for (var key in jqueryExpander) {
        // $('#' + jqueryExpander[key]['child'] + ':input').chained('#' + chaniedSelects[key]['parent'] + ':input');
      }
    }
};

})(jQuery);