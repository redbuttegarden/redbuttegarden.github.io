// (function ($) {
//
//     jQuery.fn.autoResizeFbPage = function () {
//
//         var fixWidth = function ($container, $clonedContainer, doParse) {
//             // default parameter.
//             doParse = typeof doParse == 'undefined' ? true : doParse;
//             var updatedWidth = $container.width();
//             // update all div.fb-page with correct width of container
//             var isMobile = window.matchMedia("(max-width: 500px)");
//
//             if (isMobile.matches) {
//                 //Conditional script here
//                 if (window.matchMedia("(orientation: portrait)").matches) {
//                     // you're in PORTRAIT mode
//                     updatedWidth = $(window).width();
//                 }
//
//                 if (window.matchMedia("(orientation: landscape)").matches) {
//                     // you're in LANDSCAPE mode
//                     updatedWidth = $(window).height();
//                 }
//             }
//
//             $clonedContainer
//                 .find('div.fb-page')
//                 .each(function () {
//                     $(this).attr('data-width', updatedWidth);
//                 });
//             $('div.embedded', $clonedContainer).each(function () {
//                 $(this).attr('max-width', updatedWidth);
//             });
//             // update page with adjusted markup
//             $container.html($clonedContainer.html());
//
//             //should we call FB.XFBML.parse? we don't want to do this at page load because it will happen automatically
//             if (doParse && FB && FB.XFBML && FB.XFBML.parse)
//                 FB.XFBML.parse();
//         };
//
//         return this.each(function () {
//
//             var $container = $(this),
//              $clonedContainer = $container.clone();
//
//             // make sure there is a .fb-page element before we do anything.
//             if (!$container.find('div.fb-page').length) {
//                 return false;
//             }
//
//             // execute once (document.ready) and do not call FB.XFBML.parse()
//             fixWidth($container, $clonedContainer, false);
//
//             $(window).on('resize load', function () {
//                 fixWidth($container, $clonedContainer);
//             }).trigger('resize');
//        });
//     };
//
// })(jQuery);
//
// (function ($) {
//     $(document).ready(function () {
//         $('#Facebook').autoResizeFbPage();
//     });
// })(jQuery);

// ResizeSensor Usage below
// var element = document.getElementById('Facebook');
// new ResizeSensor(element, function() {
//     console.log('Changed to ' + element.clientWidth);
// });
