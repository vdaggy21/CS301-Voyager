/*var element = document.getElementById("voy");

element.style.zIndex = "4";
element.style.height= "150px";
element.style.left = "270px";
element.style.top = "470px";
*/
        function upArrowPressed() {
            var element = document.getElementById("voy");
            if (parseInt(element.style.top) >= 27)
            {
                element.style.top = parseInt(element.style.top) - 5 + 'px';
            }
        }

        function downArrowPressed() {
            var element = document.getElementById("voy");
            if (parseInt(element.style.top) <= 470)
            {
                element.style.top = parseInt(element.style.top) + 5 + 'px';
            }
        }

        function moveSelection(event) {
            switch (event.keyCode) {
                case 38:
                    upArrowPressed();
                    break;
                case 40:
                    downArrowPressed();
                    break;
            }
        };
        function docReady() {
            window.addEventListener('keydown', moveSelection);
        }