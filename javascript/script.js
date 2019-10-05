

var topics = ['eggs', 'bacon', 'sausage', 'pancakes']

console.log(topics)



    for (var j = 0; j < topics.length; j++) {
        var buttons = $('<button>');
        buttons.attr('data-food', topics[j]);
        buttons.attr('class', 'food-buttons');
        buttons.css({'margin-right':'1.1rem', 'margin-bottom': '1.1rem'})
        buttons.text(topics[j])
        $('.button-container').append(buttons);
    
    
    }





//$('.food-buttons').on('click', function () {

var showgifs=function(){
    var food = $(this).attr('data-food');

    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=PN02ITADjn1ry8YZDRMaG1no4h8emWiT&limit=10",
        method: "GET"
    }).then(function (response) {
        var results = response.data;


        $('.gif-container').empty();
        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
                // var gifContainer = $('.gif-container');

                var rating = results[i].rating;
                

                var p1 = $('<p>').css({ "font-size": "1.3rem", "color": "darkslateblue", "background-color": "green", "padding": ".4rem", "width":"25%", 'margin-bottom':'1.1rem', 'border-radius':'3px'}).text('Rating: ' + rating);

                var image1 = $('<img>')

                image1.attr('src', results[i].images.fixed_height.url);
                image1.css('margin-bottom', '1.1rem')

                $('.gif-container').append(p1);
                $('.gif-container').append(image1)
            }
            // if(this){
            //     gifContainer.show();
            // }
            // else if(this){
            //     console.log('yes')
            // }
            

        }


        // var still = results.data[0].images.fixed_height_still
        // console.log(still)
        // $('.gif-container').html(still);



    });
}
//})

var submitBtn = $('#submitBtn');
var userInput = $('#userInput')

$(document).on("click",".food-buttons", showgifs)
submitBtn.on('click', function (e) {
    e.preventDefault();

    var value = userInput.val().trim();
    console.log(value)
    console.log(typeof(value))
    topics.push(value)
    console.log(topics)
    //document.location.reload()
    $('.button-container').empty();
    for (var x= 0; x < topics.length; x++) {
        
        var buttons = $('<button>');
        buttons.attr('data-food', topics[x]);
        buttons.attr('class', 'food-buttons');
        buttons.css({'margin-right':'1.1rem', 'margin-bottom': '1.1rem'})
        buttons.text(topics[x])
        $('.button-container').append(buttons);
    }
    
    // }
   // looper();

    // var button2 = $(this, '<button>');

    // var button2 = $('<button>');
    // button2.text(value);
    // $('.button-container').append(button2)
    
    

        // var button2 = $('<button>').attr('data-food', results2).text(value);
        // button2.attr('data-food', results2);
        // button2.text(value);

        // topics.append(button2)

        // $(button2).on('click',function(){
        //     // if(this){
        //     //     $('.button-container').
        //     // }
        //     $(this).attr('data-food', results2)
        //     $('.gif-container').append($('<p>').text('Rating: ' + results2.rating))
        //     $('.gif-container').append($('<img>').attr('src', results2.images.fixed_height.url))
        // })


        // var still2 = results2.data[0].images.fixed_height_still
        // console.log(still)
        // $('.gif-container').html(still2);



    });








// ----------- Click Events ----------- //




