$(document).ready(() => {
    var nameDiv = $('div.col .details:contains("Name")');
    var snameDiv = $('div.col .details:contains("Surname")');
    var emailDiv = $('div.col .details:contains("Email")');
    var birthDateDiv = $('div.col .details:contains("Birth date")');

    //if the edit is done name 
    $(nameDiv).find('button').click(changeDiv = () => {

        let insideBlock = nameDiv.find('span').html();

        $(nameDiv).find('b, span, button').remove();

        $(nameDiv).addClass('row, form-group');
        $(nameDiv).append(
            $('<input/>', {
                class: "col-md-8 form-control",
                name: "newName",
                value: insideBlock,
                input: "text"
            }),
            $('<button></button>', {
                class: "col-md-2 btn btn-dark",
                id: "UpdateName",
                html: "Update"
            })
        );
        $('#UpdateName').on("click", function() {
            //test to grab the value 
            let originalBlock = $(nameDiv).find('input').val();
            //change the html

            $(nameDiv).find('input, button').remove();
            $(nameDiv).addClass('details');
            $(nameDiv).removeClass('row, form-group');

            $(nameDiv).append(
                $('<b></b>', {
                    html: "Name: "
                }),
                $('<span></span>', {
                    html: originalBlock
                }),
                $('<button></button>', {
                    class: "btn btn-dark pull-right",
                    html: "Edit"
                })
            );
            $(nameDiv).find('button').on("click", changeDiv);
        });
    });
    $(snameDiv).find('button').click(changeDivS = () => {

        let insideBlockS = $(snameDiv).find('span').html();

        $(snameDiv).find('b, span, button').remove();

        $(snameDiv).addClass('row, form-group');
        $(snameDiv).append(
            $('<input/>', {
                class: "col-md-8 form-control",
                name: "newName",
                value: insideBlockS,
                input: "text"
            }),
            $('<button></button>', {
                class: "col-md-2 btn btn-dark",
                id: "updateS",
                html: "Update"
            })
        );
        $('#updateS').on("click", function() {
            //test to grab the value 
            let originalBlockS = $(snameDiv).find('input').val();
            //change the html

            $(snameDiv).find('input, button').remove();
            $(snameDiv).addClass('details');
            $(snameDiv).removeClass('row, form-group');

            $(snameDiv).append(
                $('<b></b>', {
                    html: "Surname: "
                }),
                $('<span></span>', {
                    html: originalBlockS
                }),
                $('<button></button>', {
                    class: "btn btn-dark pull-right",
                    html: "Edit"
                })
            );
            $(snameDiv).find('button').on("click", changeDivS);
        });
    });
    $(emailDiv).find('button').click(changeDivE = () => {

        let insideBlockE = $(emailDiv).find('span').html();

        $(emailDiv).find('b, span, button').remove();

        $(emailDiv).addClass('row, form-group');
        $(emailDiv).append(
            $('<input/>', {
                class: "col-md-8 form-control",
                name: "newName",
                value: insideBlockE,
                type: "email"
            }),
            $('<button></button>', {
                class: "col-md-2 btn btn-dark",
                id: "UpdateName",
                html: "Update"
            })
        );
        $('#UpdateName').on("click", function() {
            //test to grab the value 
            let originalBlockE = $(emailDiv).find('input').val();
            //change the html

            $(emailDiv).find('input, button').remove();
            $(emailDiv).addClass('details');
            $(emailDiv).removeClass('row, form-group');

            $(emailDiv).append(
                $('<b></b>', {
                    html: "Email: "
                }),
                $('<span></span>', {
                    html: originalBlockE
                }),
                $('<button></button>', {
                    class: "btn btn-dark pull-right",
                    html: "Edit"
                })
            );
            $(emailDiv).find('button').on("click", changeDivE);
        });
    });
    $(birthDateDiv).find('button').click(changeDivB = () => {

        let insideBlockB = $(birthDateDiv).find('span').html();

        $(birthDateDiv).find('b, span, button').remove();

        $(birthDateDiv).addClass('row, form-group');
        $(birthDateDiv).append(
            $('<input/>', {
                class: "col-md-8 form-control",
                name: "newName",
                value: insideBlockB,
                type: "date"
            }),
            $('<button></button>', {
                class: "col-md-2 btn btn-dark",
                id: "updateBirth",
                html: "Update"
            })
        );
        $('#updateBirth').on("click", function() {
            //test to grab the value 
            let originalBlockB = $(birthDateDiv).find('input').val();
            //change the html

            $(birthDateDiv).find('input, button').remove();
            $(birthDateDiv).addClass('details');
            $(birthDateDiv).removeClass('row, form-group');

            $(birthDateDiv).append(
                $('<b></b>', {
                    html: "Birth Date: "
                }),
                $('<span></span>', {
                    html: originalBlockB
                }),
                $('<button></button>', {
                    class: "btn btn-dark pull-right",
                    html: "Edit"
                })
            );
            $(birthDateDiv).find('button').on("click", changeDivB);
        });
    });
});