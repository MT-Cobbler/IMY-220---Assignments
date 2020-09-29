$(document).ready(function() {
    $("div.loading mb-3").remove();
    $(window).on("scroll", async function() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
            //Add something at the end of the page
            console.log("You have reached the bottom of the page");
            let url = "users.json";
            var duration = 1000;
            const response = await getUsers(url)
            const processResponse = await sleep(duration);
            let objLength = response.length;
            let copyLoading = $("div.loading mb-3");

            for (let i = 0; i < objLength; i++) {
                // $(createUserCard()).insertBefore(".loading")
                $(".loading").remove();
                $("#userList").append(createUserCard)
                $(".card-title").last().html(response[i].name + " " + response[i].surname);
                $(".card-text").last().html(response[i].quote);
            }
            $("#userList").append("<div class = 'loading mb-3' ><img src = 'loading.gif' / ></div>");
        }
    })
    const getUsers = url => {
        return users = new Promise((res, rej) => {
            $.getJSON(url).done(data => {
                res(data);
            })
        })
    }

    const createUserCard = () => {
        let card = "<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4'><img src='bg.png' class='card-img' alt=''...'></div><div class='col-md-8'><div class='card-body'><h5 class='card-title'></h5><p class='card-text'></p></div></div></div></div>";
        return card;
    }

    const sleep = duration => {
        return new Promise((res, rej) => {
            setTimeout(res, duration);
        })
    }
})