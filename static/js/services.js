/*********************************************************************
***********************************************************************
    Template Name: Mutant Portfolio Theme
    Template URI:
    Description: Personal Portfolio Template
    Author: Ashiqur Rahman Tusher
    Author URI: 
    Version: 1
************************************************************************
************************************************************************/

$(function() {
	"use strict";

    /*--------------------------------
      1. Start Preloader Animation
    ----------------------------------*/
    $(window).on("load", function() {
        $(".loader").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });
        $(".all-container").css({ "opacity": "1" });
    });
     /*--------------------------------
      1.  End Preloader Animation
    ----------------------------------*/

    /*--------------------------------
  		4. Start Menu
    ----------------------------------*/
    // Highlighting Menu on Scroll Through Sections
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if($(window).scrollTop()+50 >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.menu-item').removeClass('active');
                $(".menu-item." + id).addClass("active");
                $(".mobile-menu-item").removeClass("active");
                $(".mobile-menu-item." + id).addClass("active");
            }
        });
    });
    
    // Styling Menu on Scroll
    $('.about-me').waypoint({
      handler: function(direction) {
        // Fixing Menu after leaving Header Section
        $(".menu").toggleClass("menu-fix");
        // Changing Menu background after leaving Header Section
        $(".menu-container").toggleClass("menu-normal");
        $(".menu-item").toggleClass("menu-item-transparent");
        $(".desktop-menu .hvr-underline-from-left").toggleClass("dark");
        // Toggling Mobile Menu Visibility
        $(".mobile-menu").toggleClass("mobile-menu-fix");
        // Auto-Collapsing Mobile Menu When Left Open
        var a = $(".menu-link").attr("class");
        if (direction == "up" && a == "menu-link active"){
            $(".menu-link").trigger("click");
        }
      }
    });

    // Toggle Mobile Menu
    $('.mobile-menu a').on("click",function(){
        $(".menu-link").toggleClass("active");
        $(".menu-slider").slideToggle(500);
    });
    /*--------------------------------
  		4. End Menu
    ----------------------------------*/

    /*--------------------------------
        8. Start Code for Mobile Devices
    ----------------------------------*/
    // Code for Opera Mini
    var vh = $(window).height();
    if (navigator.userAgent.indexOf('Opera Mini') != -1){
        // Setting Fun Facts Value Immediately 
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
        // Setting Skillbar Value Immediately
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },0);
        });
        // Removing Bootstrap Class and Re-Style Input
        $("input").removeClass("form-control");
        $("input").css({
            "width":"100%",
            "height":"50px",
            "background":"#fff"
        });
        // Removing Full-Screen Nav
        $(".navigation-icon").css("display","none");
    }

    // Code For UC Browser
    if (navigator.userAgent.indexOf('UCBrowser') != -1){
        // Removing Full-Screen Nav
        $(".navigation-icon").css("display","none");
        $(".fun-facts").css({
            "display":"table",
            "margin":"auto"
        });
        // Setting Fun Facts Value Immediately 
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
        // Setting Skillbar Value Immediately
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },0);
        });
    }
    /*--------------------------------
        8. End Code for Mobile Devices
    ----------------------------------*/

    /*--------------------------------
        9. Others
    ----------------------------------*/
    // Code for Internet Explorer
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)){
        $(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment","scroll");
        $(".fullscreen-nav-holder").css("width","100vw");
    }

    // Wow Plugin Initialization
    var wow = new WOW({
        animateClass: 'animated',
        offset: 70,
        mobile: false
    });
    wow.init();

}(jQuery));