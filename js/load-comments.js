(function($) {
    "use strict";
    $(function() {
        var $comment = $('.comment'),
            commentsUrl = $comment.data('url'),
            $commentsContainer = $('.comments-container');
        $('<img/>')[0].src = 'img/image_634743.gif';

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
            $commentsContainer.append('<div class="alert alert-danger">Error while loading comments.</div>');
        }
    });
})(jQuery);