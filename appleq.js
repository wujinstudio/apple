$(function () {

    $(".adc").click(function () {
        $(document.body).toggleClass("ying");
        $(".xiaop").slideToggle("slow");
        // console.log($("p"));
        $(".yi").toggleClass("nn");
        $(".er").toggleClass("xx");
        $(".yi").toggleClass("dd");
        $(".jjjk").slideToggle();
    })
    $(".jjjk").click(function () {
        $(".Sanj").slideToggle();
        $(".chang").slideToggle();
    })
    $(".coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("po");
    })
})