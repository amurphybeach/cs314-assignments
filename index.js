$(document).ready(function(){
    let canary_1;
    let canary_2;
    $.get("https://jsonplaceholder.typicode.com/users").then(function(data){
        $.each(data, function(i, item){
            $("#div_main").append('<div id="div' + i + '">'+ '<p>' + 'Name: ' + item.name + '</p>' + '<p>' + 'Email: ' + item.email + '</p>'+ '<p>' + 'Company: ' + item.company.name + '</p>'+ '<button id="button' + i + '">' + 'Todo' + '</button>' + '<button id="a_button' + i + '">' + 'Album' + '</button>' + '</div>');
            $("#button" + i).one('click', function(){
                buttonContent(i);
                $("#todo_" + i).show(); $("#album_" + i).hide();
            });
            if(!canary_1){
                $("#button" + i).click(function(){
                    $("#todo_" + i).toggle(); $("#album_" + i).hide();
                });
            }

            $("#a_button" + i).one('click', function(){
                albumContent(i);
                $("#album_" + i).show(); $("#todo_" + i).hide();
            });
            if(!canary_2){
                $("#a_button" + i).click(function(){
                    $("#album_" + i).toggle(); $("#todo_" + i).hide();
                });
            }
        });
    });
});

function buttonContent(user){
    flag = true;
    if(flag){
        flag = false;
        $("#div" + user).append('<div id="todo_' + user + '">');
        $.get("https://jsonplaceholder.typicode.com/todos").then(function(data){
        $.each(data, function(i, item){
            if((user + 1) == item.userId){
                $("#todo_" + user).append('<p>' + 'Todo: ' + item.title + '</p>');
                if(item.completed){
                    $("#todo_" + user).append('Item Complete');
                }
                else{
                    $("#todo_" + user).append('Item not Complete');
                }
            }
            $("#todo_" + user).show();
        });
    });
    }
    return false;
}

function albumContent(user){
    $("#div" + user).append('<div id="album_' + user + '">');
        $.get("https://jsonplaceholder.typicode.com/albums").then(function(data){
        $.each(data, function(i, item){
            if((user + 1) == item.userId){
                $("#album_" + user).append('<p>' + 'Album: ' + item.title + '</p>');
            }
            $("#album_" + user).show();
        });
    });
}