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