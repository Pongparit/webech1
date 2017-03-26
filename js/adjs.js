$(document).ready(function() {

$('.addmem').click(function(e){
    e.preventDefault();
    $('#tabbar a[href="#tab_b"]').tab('show');
});

$('.printmem').click(function(e){
    e.preventDefault();
    $('#tabbar a[href="#tab_c"]').tab('show');
});

$('.editper').click(function(e){
    e.preventDefault();
    $('#tabbar a[href="#tab_d"]').tab('show');
});

$('.importcsv').click(function(e){
    e.preventDefault();
    $('#tabbar a[href="#tab_e"]').tab('show');
});
});
