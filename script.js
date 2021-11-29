$(document).ready(function(){

    function master(){

        // key down function, we need to pass a parameter of key through our function so we have access to the key codes
        // function keyPress(key){
        //    if(key.keyCode == '81'){
        //        $('body').css('background-color','#333');
        //    }
        //    if(key.keyCode == '66'){
        //     // alert('b has been pressed');
        //     $('body').css('background-color','#f9f9f9');
        //     }
        // }

        // function keyLifted(key){
        //     if(key.keyCode == '65'){
        //         alert('a key has been lifted');
        //     }
        // }


        function padsDown(key){

            let colours = ['#FDE5B9','#B5EFE0','#B0D9F3','#D8B4E2','#FF9BC5','#FF9798'];
            let randomColour = colours[Math.floor(Math.random() * colours.length)];
            console.log(randomColour);


            const beatPad = document.querySelectorAll('.pad');
            const beatPadText = document.querySelectorAll('.pad p');
            // console.log(beatPad);

            if(key.keyCode == '68'){
                beatPad[0].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[0].style.opacity='0.2';
                $('.one').css('background-color',randomColour);
                let audio = new Audio('./sounds/kick-808.wav');
                audio.play();
                
            }
            if(key.keyCode == '70'){
                beatPad[1].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[1].style.opacity='0.2';
                $('.two').css('background-color',randomColour);
                let audio = new Audio('./sounds/hihat-808.wav');
                audio.play();
            }
            if(key.keyCode == '71'){
                beatPad[2].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[2].style.opacity='0.2';
                $('.three').css('background-color',randomColour);
                let audio = new Audio('./sounds/snare-808.wav');
                audio.play();
            }
            if(key.keyCode == '72'){
                beatPad[3].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[3].style.opacity='0.2';
                $('.four').css('background-color',randomColour);
                let audio = new Audio('./sounds/snare-vinyl02.wav');
                audio.play();
            }
            if(key.keyCode == '74'){
                beatPad[4].style.boxShadow="inset 2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[4].style.opacity='0.2';
                $('.five').css('background-color',randomColour);
                let audio = new Audio('./sounds/kick-classic.wav');
                audio.play();
            }
        }

        function padsUp(key){
            const beatPad = document.querySelectorAll('.pad');
            const beatPadText = document.querySelectorAll('.pad p');

            if(key.keyCode == '68'){
                beatPad[0].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[0].style.opacity='0.5';
            }
            if(key.keyCode == '70'){
                beatPad[1].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[1].style.opacity='0.5';
            }
            if(key.keyCode == '71'){
                beatPad[2].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[2].style.opacity='0.5';
            }
            if(key.keyCode == '72'){
                beatPad[3].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[3].style.opacity='0.5';
            }
            if(key.keyCode == '74'){
                beatPad[4].style.boxShadow="2px 2px 10px 0 rgba(0,0,0,.08),-2px -2px 10px 0 rgba(255,255,255,1) ";
                beatPadText[4].style.opacity='0.5';
            }
        }




        // window event listener so the DOM knows that we want to listen for a key press or key up
        // we set the boolean value to false so the DOM registers when a key press or key up is true and runs what ever code we specify
        // window.addEventListener("keydown",keyPress,false);
        // window.addEventListener("keyup",keyLifted,false);

        window.addEventListener("keydown",padsDown,false);
        window.addEventListener("keyup",padsUp,false);
    }

    master();

});