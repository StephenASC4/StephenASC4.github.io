function setup(){
    $('.size').delay(800).slideUp(2000);
    $('body').css('background','#bee0ff');
}
$(document).ready(setup);
import myfont from 'path/to/font.ttf';
injectGlobal`
  @font-face {
    font-family: 'PTC55F';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
