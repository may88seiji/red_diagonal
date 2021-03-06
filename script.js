$(window).on('load resize', function(){
    //ウインドウの幅と高さを取得する
    var $width = $(window).width();
    var $height = $(window).height();
    //ウインドウの対角線の長さと角度を取得する
    var radian = Math.atan($height / $width);
    var degree = radian/(Math.PI/180);
    var diagonal_line = Math.sqrt( $width*$width + $height*$height );
    //var diagonal_line = $height / Math.sin(radian);こちらの式でも対角線の長さ取得可能

    //cssに対角線の長さと角度を設定する
    $(".diagonal_line").css({width: diagonal_line,
                        transform:'rotate(' + (degree) + 'deg)'});
});
