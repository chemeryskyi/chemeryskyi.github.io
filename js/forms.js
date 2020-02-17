(function () {
  var loader = '<div>\n' +
      '  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
      '     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n' +
      '    <rect x="0" y="0" width="4" height="20" fill="#333">\n' +
      '      <animate attributeName="opacity" attributeType="XML"\n' +
      '        values="1; .2; 1" \n' +
      '        begin="0s" dur="0.6s" repeatCount="indefinite" />\n' +
      '    </rect>\n' +
      '    <rect x="7" y="0" width="4" height="20" fill="#333">\n' +
      '      <animate attributeName="opacity" attributeType="XML"\n' +
      '        values="1; .2; 1" \n' +
      '        begin="0.2s" dur="0.6s" repeatCount="indefinite" />\n' +
      '    </rect>\n' +
      '    <rect x="14" y="0" width="4" height="20" fill="#333">\n' +
      '      <animate attributeName="opacity" attributeType="XML"\n' +
      '        values="1; .2; 1" \n' +
      '        begin="0.4s" dur="0.6s" repeatCount="indefinite" />\n' +
      '    </rect>\n' +
      '  </svg>\n' +
      '</div>';

  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(
      ".js-overlay {" +
      "  z-index: 999999999;" +
      "  display: none;" +
      "  opacity: 0;" +
      "  position: fixed;" +
      "  top: 0;" +
      "  left: 0;" +
      "  right: 0;" +
      "  bottom: 0;" +
      "  background-color: rgba(0, 0, 0, .5);" +
      "  -webkit-transition: opacity .15s ease-in;" +
      "  transition: opacity .15s ease-in;" +
      "  cursor: pointer;" +
      "}" +
      ".js-popup {" +
      "  z-index: 9999999999;" +
      "  display: none;" +
      "  opacity: 0;" +
      "  position: fixed;" +
      "  left: 50%;" +
      "  top: 50%;" +
      "  width: 90%;" +
      "  max-width: 600px;" +
      "  transform: translate(-50%, -50%);" +
      "  padding: 2rem;" +
      "  text-align: center;" +
      "  background-color: white;" +
      "  -webkit-box-shadow: 0 0 8px 2px rgba(0,0,0,.2);" +
      "  -moz-box-shadow: 0 0 8px 2px rgba(0,0,0,.2);" +
      "  box-shadow: 0 0 8px 2px rgba(0,0,0,.2);" +
      "  -webkit-border-radius: 4px;" +
      "  -moz-border-radius: 4px;" +
      "  border-radius: 4px;" +
      "  font-family: 'Open Sans', sans-serif;" +
      "  color: rgba(0, 0, 0, .75);" +
      "  -webkit-transition: opacity .15s ease-in;" +
      "  transition: opacity .15s ease-in;" +
      "}" +
      ".js-popup ul {" +
      "  margin: 2rem 0;" +
      "  text-align: left;" +
      "}" +
      ".js-popup-close {" +
      "  float: right;" +
      "  line-height: 1;" +
      "  margin: -1rem -1rem 0 0;" +
      "  cursor: pointer;" +
      "}" +
      ".js-popup h3 {" +
      "  margin-bottom: 1rem;" +
      "  font-weight: 700;" +
      "}"
  ));
  document.head.appendChild(style);

  var overlay = document.createElement("div");
  // overlay.className = "js-overlay";
  overlay.className = "popupNew";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function () {
    hidePopup();
  });

  var popup = document.createElement("div");
  popup.className = "popup__box hide thanks";
  overlay.appendChild(popup);
  popupClose = document.createElement("div");
  popupClose.className = "popup__close";
  popupClose.title = "Закрыть";
  popupClose.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/> </svg>';
  popup.appendChild(popupClose);
  popupClose.addEventListener("click", function () {
    hidePopup();
  });
  popupContent = document.createElement("div");
  popup.appendChild(popupContent);

  function showPopup() {

    // overlay.fadeIn()
    // popup.removeClass('hide')
    overlay.style.display = "block";
    popup.style.display = "block";
    window.setTimeout(function () {
      overlay.style.opacity = 1;
      popup.style.transform = 'translate(0, -50%)';
    }, 200);
  }

  function hidePopup() {
     // popup.addClass('hide');
    // overlay.fadeOut()
    
    popup.style.transform = 'translate(100vw, -50%)';
    window.setTimeout(function () {
      // popup.removeClass('hide')
      overlay.style.opacity = 0;
      overlay.style.display = "none";
      popup.style.display = "none";
    }, 200);
  }

  var dataLayer = [];
  for (var formIndex = 0, forms = document.querySelectorAll("form"); formIndex < forms.length; formIndex++) {
    (function (form) {
      var submitButtons = form.querySelectorAll("[type='submit']");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        for (var buttonIndex = 0; buttonIndex < submitButtons.length; buttonIndex++) {
          submitButtons[buttonIndex].disabled = true;
        }
        showPopup();
        popupContent.innerHTML = "<div class='popup__header' >Подождите, заявка отправляется...</div>" + loader;
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.responseType = "json";
        xhr.onload = function () {
          for (var buttonIndex = 0; buttonIndex < submitButtons.length; buttonIndex++) {
            submitButtons[buttonIndex].disabled = false;
          }
          if (xhr.status === 200 || window.location.host === 'woof-woof.ru') {
            if (typeof dataLayer !== 'undefined') {
              dataLayer.push({
                'event': 'submit'
              });
            }
            if (xhr.response) {
              if (xhr.response.html) {
                popupContent.innerHTML = xhr.response.html;
              }
              if (xhr.response.redirect) {
                window.location.href = xhr.response.redirect;
              }
            } else {
              popupContent.innerHTML = "<h3>Ваша заявка принята</h3>" +
                  "<p>Мы свяжемся с вами в течение 15 минут для подтверждения заказа.</p>";
            }
          } else {
            if (xhr.response) {
              if (xhr.response.html) {
                popupContent.innerHTML = xhr.response.html;
              }
              if (xhr.response.redirect) {
                window.location.href = xhr.response.redirect;
              }
            } else {
              popupContent.innerHTML = "<h3>Ошибка отправки формы</h3><p>Попробуйте повторить попытку позднее</p>";
            }
          }
        };
        var formData = new FormData(form);
        xhr.send(formData);
      });
    })(forms[formIndex])
  }
})();