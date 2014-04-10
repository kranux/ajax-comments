(function($, _) {
    "use strict";
    var PLUGIN_NAME = "autoload-next-element",
        template;

    $.fn.autoloadNextElement = function(options) {
        if (!template) {
            template = _.template($(options.templateSelector).html());
        }

        this.each(function() {
            var $target = $(this);
            if (!$target.data(PLUGIN_NAME)) {
                init($target);
            }
        });

        function init($target) {
            $target.waypoint(function(direction) {
                var $comment = $(this);
                if (direction !== 'down') {
                    return;
                }
                if (typeof options.ajaxStart === 'function') {
                    options.ajaxStart();
                }

                $.ajax({
                    url: options.url + '?prev=' + $comment.data('id')
                }).done(done)
                    .fail(options.errback)
                    .always(options.ajaxStop);

                function done(data) {
                    var parsedData,
                        $newElement;
                    try {
                        parsedData = $.parseJSON(data);
                    } catch (ex) {
                        parsedData = null;
                        if (typeof options.errback === 'function') {
                            options.errback();
                        }
                    }

                    if (!parsedData) {
                        return;
                    }
                    $newElement = $(template(parsedData));
                    $comment.after($newElement);
                    $newElement.fadeIn(function() {
                        if (typeof options.callback === 'function') {
                            options.callback($newElement);
                        }
                    });
                    $target.waypoint('destroy');
                }

            }, {
                offset: 'bottom-in-view'
            });
            $target.data(PLUGIN_NAME, true);
        }
    };
})(jQuery, _);