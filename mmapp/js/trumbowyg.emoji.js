/* ===========================================================
 * trumbowyg.emoji.js v0.1
 * Emoji picker plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Nicolas Pion
 *          Twitter : @nicolas_pion
 */

(function ($) {
    'use strict';

    var defaultOptions = {
        emojiList: [

            ':laughing:',
            ':blush:',
            ':smiley:',
            ':heart_eyes:',
            ':kissing_closed_eyes:',
            ':relieved:',
            ':satisfied:',
            ':grin:',
            ':kissing:',
            ':kissing_smiling_eyes:',
            ':stuck_out_tongue:',
            ':sleeping:',
            ':worried:',
            ':anguished:',
            ':open_mouth:',
            ':grimacing:',
            ':confused:',
            ':hushed:',
            ':expressionless:',
            ':unamused:',
            ':sweat_smile:',
            ':sweat:',
            ':disappointed_relieved:',
            ':weary:',
            ':disappointed:',
            ':fearful:',
            ':cold_sweat:',
            ':persevere:',
            ':cry:',
            ':joy:'
        ]
    };

    // Add all emoji in a dropdown
    $.extend(true, $.trumbowyg, {
        langs: {
            en: {
                emoji: 'Add an emoji'
            },
            fr: {
                emoji: 'Ajouter un emoji'
            }
        },
        plugins: {
            emoji: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.emoji = $.extend(true, {}, defaultOptions, trumbowyg.o.plugins.emoji || {});
                    var emojiBtnDef = {
                        dropdown: buildDropdown(trumbowyg)
                    };
                    trumbowyg.addBtnDef('emoji', emojiBtnDef);
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        var dropdown = [];

        $.each(trumbowyg.o.plugins.emoji.emojiList, function (i, emoji) {
            var btn = emoji,
                btnDef = {
                    param: emoji,
                    fn: function () {
                        //trumbowyg.execCmd('insertText ' + emoji + ' ');
                        trumbowyg.execCmd('insertText', ' ' + emoji + ' ');
                        emojify.run();   //todo возможно преобразование на лету и не нужно!

                        return true;
                    }
                };
            trumbowyg.addBtnDef(btn, btnDef);
            dropdown.push(btn);
        });

        return dropdown;
    }
})(jQuery);