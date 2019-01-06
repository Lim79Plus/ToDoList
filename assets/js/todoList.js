//check off spesific todos by 
// following listener execute only page read,
// so when you add new todo, the new one do not create listener
// $("li").click(function () {
//     $(this).toggleClass("listCompleted");
// });
//following code, when every you click whole ul space,
//create eventListener
$("ul").on("click", "li", function () {
    $(this).toggleClass("listCompleted");
});

//click on X to delete todo
//following code, do not work for added todo
// $("span").click(function (event) {
//     $(this).parent().fadeOut(function () {
//         $(this).remove();
//     })
//     event.stopPropagation();
// })

$("ul").on("click", "span", function (event) {
    //in this method 
    //$(this)== span
    //$(this).parent() == li
    $(this).parent().fadeOut(function () {
        //in here $(this) == li
        $(this).remove();
    })
    //jQuery Method stop anyother listener
    event.stopPropagation();
});

//add todo
$("input[type='text']").keypress(function (event) {
    //event.which === 13 means hit enter
    if (event.which === 13) {
        let newTodoText = $(this).val();
        $(this).val("");
        console.log(newTodoText);
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newTodoText + "</li>");
    }
});

//
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle(500);
})