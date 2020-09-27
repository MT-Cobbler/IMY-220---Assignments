$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            //Add something at the end of the page
            console.log("You have reached the bottom of the page");
            let url = "users.json";
            let duration = 1000;
            getUsers(url)
                .then(data => {
                    let objLength = data.length;
                    for (let i = 0; i < objLength; i++) {
                        $(createUserCard()).insertBefore(".loading")
                        $(".card-title").last().html(data[i].name + " " + data[i].surname);
                        $(".card-text").last().html(data[i].quote);
                    }
                })
        }
    });
    const getUsers = url => {

        return users = new Promise((res, rej) => {
            $.getJSON(url).done(data => {
                res(data);
            })
        })
    }

    const createUserCard = () => {

        var card = "<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4'><img src='bg.png' class='card-img' alt=''...'></div><div class='col-md-8'><div class='card-body'><h5 class='card-title'></h5><p class='card-text'></p></div></div></div></div>"
        return card;
    }

    const sleep = duration => {
        return new Promise((res, rej) => {
            setTimeout(res, duration);
        })
    }
})
