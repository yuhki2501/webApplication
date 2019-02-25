$(function(){
    //#headerLoginのjQueryオブジェクトを変数に格納する
    $headerLogin = $('#headerLogin');
    $loginModal = $('#login-modal');
    $descriptionButton = $('#description-button');
    $descriptionModal = $('#description-modal');
    $closeModal = $('.close-modal');

    //ヘッダー部のログインボタンをクリックしたときの処理
    $headerLogin.click(function(){
        $loginModal.fadeIn();
    });
    $descriptionButton.click(function(){
        $descriptionModal.fadeIn();
    })
    $closeModal.click(function(){
        $loginModal.fadeOut();
        $descriptionModal.fadeOut();
    });

});