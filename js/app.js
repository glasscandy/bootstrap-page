$(function() {

// sticky menu

    var menu = $(".menu-panel");
    var nav = menu.find(".menu");
    var top = menu.offset().top;

    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > top) {
            menu.addClass("sticky");
        } else {
            menu.removeClass("sticky");
        }
    });

    $(window).on("resize", function () {

        if (menu.hasClass("sticky") === true) {
            top = nav.offset().top - 10;
        } else {
            top = menu.offset().top - 10;
        }
    });

//scroll

    var scroll = $(".scroll");
    scroll.on("click", function (event) {
        $('html,body').animate({
            scrollTop: $(nav).offset().top - 18
        }, 600);
    });


// portfolio gallery


    $('ul.first').bsPhotoGallery({
        "classes": "col-lg-4 col-md-6 col-sm-6 col-xs-12 col-xxs-12",
        "hasModal": true
    });

    // portfolio btns

    function portfolio() {
        var select = $(".select");
        var all = $(".btn_all");
        var web = $(".btn_web");
        var apps = $(".btn_apps");
        var icon = $(".btn_icons");
        var portfolioItem = $(".portfolio_item");
        var appimg = $(".appimg");
        var iconimg = $(".iconimg");
        var webimg = $(".webimg");

        all.on("click", function (e) {
            portfolioItem.show(1000);
            all.addClass("selectactive");
            web.removeClass("selectactive");
            icon.removeClass("selectactive");
            apps.removeClass("selectactive");
        });
        web.on("click", function (e) {
            web.addClass("selectactive");
            all.removeClass("selectactive");
            icon.removeClass("selectactive");
            apps.removeClass("selectactive");
            appimg.hide(1000);
            iconimg.hide(1000);
            webimg.show(1000);
        });
        apps.on("click", function (e) {
            apps.addClass("selectactive");
            web.removeClass("selectactive");
            icon.removeClass("selectactive");
            all.removeClass("selectactive");
            webimg.hide(1000);
            iconimg.hide(1000);
            appimg.show(1000);

        });
        icon.on("click", function (e) {
            icon.addClass("selectactive");
            web.removeClass("selectactive");
            all.removeClass("selectactive");
            apps.removeClass("selectactive");
            appimg.hide(1000);
            webimg.hide(1000);
            iconimg.show(1000);

        });

    }

    portfolio();



// form

          // function formValidation() {
          //
          //
          //   var form = $("#contactForm");
          //   var emailInput = $("#emailInput");
          //   var passwordInput = $("#passwordInput");
          //   var messageInput = $("#messageInput");
          //   var error = $(".error");
          //
          //   form.on("submit", function(e) {
          //
          //     e.preventDefault();
          //   });
          //
          //   var email = emailInput.val();
          //   var password = passwordInput.val();
          //   var message = messageInput.val()
          //   if (password.length > 5) {
          //     if ((email.search("@") !== -1) && (email.search(".") !== -1)) {
          //       if (message.length > 10) {
          //         error.text("formularz został wysłany")
          //       } else {
          //         e.preventDefault();
          //         error.text("wiadomosc musi byc dluzsza niz 10 znakow")
          //       }
          //     } else {
          //       e.preventDefault();
          //       error.text("email musi zawirac @ i kropke");
          //     }
          //   } else {
          //     e.preventDefault();
          //     error.text("hasło musi miec więcej niż 5 znakow")
          //   };
          //
          // };
          //
          // formValidation();

        });
