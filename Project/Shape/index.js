$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('#home').addClass('active');
      
    }
    else {
        $('#port').removeClass('active');
 
    }
 
 });
$(window).scroll(function(){
    if ($(window).scrollTop() > 500) {
        $('#port').addClass('active');
        $('#home').removeClass('active');
    }
    else {
        $('#port').removeClass('active');
 
    }
 
 });
$(window).scroll(function(){
    if ($(window).scrollTop() > 1200) {
        $('#services').addClass('active');
        $('#port').removeClass('active');
    }
    else {
        $('#services').removeClass('active');
 
    }
 
 });
 $(window).scroll(function(){
    if ($(window).scrollTop() > 1900) {
        $('#studio').addClass('active');
        $('#services').removeClass('active');
    }
    else {
        $('#studio').removeClass('active');
 
    }
 
 });
 $(window).scroll(function(){
    if ($(window).scrollTop() > 2050) {
        $('#contact').addClass('active');
        $('#studio').removeClass('active');
    }
    else {
        $('#contact').removeClass('active');
 
    }
 
 });
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $("header").css("background-color","rgb(0, 0, 0)");


    } else {
        $("header").css("background-color","transparent");
        }
})
})
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 950){
            $(".list").css({"opacity" : "1"})
        }
 else {
        $(".list").css({"opacity" : "0"})
    }
 })
 })
 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1250){
            $(".list2").css({"opacity" : "1"})
        }
 else {
        $(".list2").css({"opacity" : "0"})
    }
 })
 })
 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1650){
            $(".studioimg").css({"opacity" : "1"})
        }
 else {
        $(".studioimg").css({"opacity" : "0"})
    }
 })
 })
$(document).ready(function(){
$(window).scroll(function(){
        if ($(this).scrollTop() > 1850){
            $(".studiotxt li:nth-child(1)").css({"opacity" : "1"})
        }
 else {
        $(".studiotxt li:nth-child(1)").css({"opacity" : "0"})
    }
 })
 })
$(document).ready(function(){
$(window).scroll(function(){
        if ($(this).scrollTop() > 1850){
        $(".studiotxt li:nth-child(2)").css({"opacity" : "1"})
        }
 else {
        $(".studiotxt li:nth-child(2)").css({"opacity" : "0"})
    }
 })
 })
$(document).ready(function(){
$(window).scroll(function(){
        if ($(this).scrollTop() > 1850){
            $(".studiotxt li:nth-child(3)").css({"opacity" : "1"})
        }
 else {
        $(".studiotxt li:nth-child(3)").css({"opacity" : "0"})
    }
 })
 })
$(window).scroll(function(){
$(document).ready(function(){
        if ($(this).scrollTop() > 1850){
            $(".studiotxt li:nth-child(4)").css({"opacity" : "1"})
        }
 else {
        $(".studiotxt li:nth-child(4)").css({"opacity" : "0"})
    }
 })
 })
