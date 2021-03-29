let url = "./assets/xml/pedidos.xml";

$.ajax(url)
    .done(function(xml) {

        var cont1 = 0
        var cont2 = 0

        $(xml).find("Pedido:not(Pedido Pedido)").each(function() {

            $('.get-xml').append("<div class='col-md-12 pedido" + cont1 + " mb-lg-5' style='border-bottom: 1px solid black !important'>");

            $('.get-xml div.pedido' + cont1).append("Cliente: " + $(this).find("Cliente").text() + "<br>");
            $('.get-xml div.pedido' + cont1).append("Pedido: " + $(this).find("Pedido").text() + "<br>");
            $('.get-xml div.pedido' + cont1).append("Pedido: " + $(this).find("Data").text() + "<br>");
            $('.get-xml div.pedido' + cont1).append("Pedido: " + $(this).find("Total").text() + "<br><br>");

            $(this).find("Produtos").children().each(function() {

                $('.get-xml div.pedido' + cont1).append("<div class='col-md-12 produto" + cont2 + " mb-3'>");

                $('.get-xml div.pedido' + cont1 + ' div.produto' + cont2).append("Codigo: " + $(this).find("Codigo").text() + "<br>");
                $('.get-xml div.pedido' + cont1 + ' div.produto' + cont2).append("Nome: " + $(this).find("Nome").text() + "<br>");
                $('.get-xml div.pedido' + cont1 + ' div.produto' + cont2).append("Nome: " + $(this).find("Quantidade").text() + "<br>");
                $('.get-xml div.pedido' + cont1 + ' div.produto' + cont2).append("Nome: " + $(this).find("Valor").text() + "<br>");

                $('.get-xml').append("</div")
                cont2++

            })

            $('.get-xml').append("</div");
            $('.get-xml').append("</div");
            cont1++

        })


    })
    .fail(function() {
        $('.get-xml').text('XML não encontrado!')
    })