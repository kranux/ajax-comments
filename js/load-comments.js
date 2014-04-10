(function($) {
    "use strict";
    $(function() {
        $('<img/>')[0].src = 'img/image_634743.gif';
        var $comment = $('.comment'),
            commentsUrl = $comment.data('url'),
            $commentsContainer = $('.comments-container');

        initNextCommentLoader($comment);

        function initNextCommentLoader($item) {
            $item.autoloadNextElement({
                templateSelector: '#comment-template',
                url: commentsUrl,
                callback: initNextCommentLoader,
                errback: onLoadCommentError,
                ajaxStart: ajaxStart,
                ajaxStop: ajaxStop,
            });
        }

        function ajaxStart() {
            $commentsContainer.append('<div class="preloader"></div>');
        }

        function ajaxStop() {
            $commentsContainer.find('.preloader').remove();
        }

        function onLoadCommentError(error) {
            $commentsContainer.append('<div class="alert alert-danger">Problem loading comments.</div>');
        }
    });
})(jQuery);

(function($, _) {
    "use strict";
    var PLUGIN_NAME = "autoload-next-comment",
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