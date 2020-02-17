      let menuUser = document.getElementsByClassName('user__who-menu');


         for (let i = 0; i < menuUser.length; i++) {
           menuUser[i].onclick = function(e){
            let popup = this.nextElementSibling;

              popup.classList.toggle('active')
             this.classList.toggle('active')
           }
         }

         let burger = document.getElementsByClassName('header__nav-burger');

          for (let i = 0; i < burger.length; i++) {

            burger[i].onclick = function(e){
              let nav = this.nextElementSibling;

                nav.classList.toggle('active')
               this.classList.toggle('active')
             }
          }
