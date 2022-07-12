import $ from "jquery";
import "../css/navbar.css";
$(function () {
    $(document).scroll(function () {
      // var $icon = $(".fa-bars");
      var $nav = $(".navbar-section");
      var $navtoggle = $(".basic-navbar-nav");
      var $font = $(".nav-item");
      var $green = $(".green");
      var $blue = $(".blue");
      var $contact = $(".contact-button")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      // $icon.toggleClass('toggle-icon', $(this).scrollTop() > $nav.height());
      $navtoggle.toggleClass('toggle-icon', $(this).scrollTop() > $nav.height());
      $font.toggleClass('font-color',$(this).scrollTop() > $nav.height());
      $green.toggleClass('white',$(this).scrollTop() > $nav.height());
      $contact.toggleClass('contact-button-new',$(this).scrollTop() > $nav.height());
      $blue.toggleClass('white',$(this).scrollTop() > $nav.height());
      $nav.addClass('scrolled-out', $(this).scrollTop() < $nav.height());
    });
  });