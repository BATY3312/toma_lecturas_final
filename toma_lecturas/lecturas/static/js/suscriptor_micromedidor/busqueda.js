$(document).ready(function() {
    // Agregar evento de clic a todas las tarjetas
    $('.suscriptor-card').click(function() {
        // Redirigir a la página de indexlectura
        var crearLecturaUrl = $(this).data('url');
        window.location.href = crearLecturaUrl;
    });

    // Filtrar las tarjetas al escribir en el input de búsqueda
    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        filterCards(value);
    });

    $('#searchButton').click(function() {
        var value = $('#searchInput').val().toLowerCase();
        filterCards(value);
    });

    function filterCards(value) {
        $('.suscriptor-card').filter(function() {
            $(this).toggle(
                $(this).find('.card-title').text().toLowerCase().indexOf(value) > -1 ||
                $(this).find('.card-text').text().toLowerCase().indexOf(value) > -1
            );
        });
    }
});
