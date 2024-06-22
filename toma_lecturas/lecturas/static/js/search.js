function setupSearch(tableId, inputId) {
    $('#' + inputId).on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#' + tableId + ' tbody tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  }



    // Call the function for each table view
    $(document).ready(function() {
      setupSearch('tablaBarrios', 'searchInput');
      // Add similar calls for other views
       setupSearch('tablaSuscriptores', 'searchInputSuscriptores');
       setupSearch('tablaLecturas', 'searchInputLecturas');
       setupSearch('tablaMicromedidores', 'searchInputMicromedidores');
    });