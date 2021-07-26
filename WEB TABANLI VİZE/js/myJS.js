function ekle(sayi) {
	$('.hesapMakinesi_ekran').val($('.hesapMakinesi_ekran').val() + sayi);
}
function hesapla(){
    $('.hesapMakinesi_ekran').val(eval($('.hesapMakinesi_ekran').val()));
}
function temizle(){
    $('.hesapMakinesi_ekran').val('');
}
function sil(){
    value=$('.hesapMakinesi_ekran').val();
    $('.hesapMakinesi_ekran').val(value.substring(0,value.length-1));
}

$(function(){
    $("alert").css("background-color","red");
});
$(function(){


$("#esittir").on({
    click:function(){
        $(this).css("background","#9966CC");

        swal("", "Yapmak istediğiniz işlem hesaplanmıştır!", "success");
    }
})

$("#sifir").css("background","black");

});

$(function(){
    $("#hesapMakAc").click(function(){
        $("#hesapMakinesi").slideDown(2000);
    });
});

$(function(){
    $("#hesapMakKapat").click(function(){
        $("#hesapMakinesi").hide(2000);
    });
});
