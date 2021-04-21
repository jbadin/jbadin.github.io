$(function ($) {
    var timelineBlocks = $('.cd-timeline-block');
    var offset = 0.8;

    //Cache les blocks qui ne sont pas encore dans le champs
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
                ? setTimeout(function () {
                    showBlocks(timelineBlocks, offset);
                }, 100)
                : window.requestAnimationFrame(function () {
                    showBlocks(timelineBlocks, offset);
                });
    });

    /*
     * Fonction permettant de cacher les bloc hors champs
     * @param {object} blocks -> Bloc contenant une date et les événements associés
     * @param {float} offset -> marge
     */
    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }
    /*
     * Fonction permettant d'afficher les bloc à leur entrée dans le champs
     * @param {object} blocks -> Bloc contenant une date et les événements associés
     * @param {float} offset -> marge
     */
    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});

var seeAllBtn = $('.btn-see-all');
var allBlocks = $('.cd-timeline-block');
var educationBtn = $('.btn-education');
var educationBlock = $('.cd-education').parent();
var workExperienceBtn = $('.btn-work-experience');
var workExperienceBlock = $('.cd-work-experience').parent();
var projectBtn = $('.btn-project');
var projectBlock = $('.cd-project').parent();

seeAllBtn.click(function () {
    allBlocks.each(function () {
        ($(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
    allBlocks.show();
});
educationBtn.click(function () {
    allBlocks.each(function () {
        ($(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
    workExperienceBlock.hide();
    projectBlock.hide();
    educationBlock.show();
});
workExperienceBtn.click(function () {
    projectBlock.hide();
    educationBlock.hide();
    workExperienceBlock.show();
});
projectBtn.click(function () {
    workExperienceBlock.hide();
    educationBlock.hide();
    projectBlock.show();
});

$(window).resize(function () {
    if ($(window).width() < 855) {
        $('.btn-sort').removeClass('btn-group-justified').addClass('btn-group-vertical');
    } else {
        $('.btn-sort').removeClass('btn-group-vertical').addClass('btn-group-justified');
    }
});
