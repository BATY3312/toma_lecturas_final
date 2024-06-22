$(document).ready(function() {
    function setupPagination(tableId, paginationId, selectId) {
        var $table = $('#' + tableId);
        var $pagination = $('#' + paginationId);
        var $select = $('#' + selectId);
        var rowsShown = parseInt($select.val());
        var rowsTotal = $table.find('tbody tr').length;
        var numPages = Math.ceil(rowsTotal / rowsShown);
        var currentPage = 0;

        // Ensure all rows are visible initially
        $table.find('tbody tr').show();

        function createPagination() {
            $pagination.empty();
            $pagination.append('<a href="#" class="page-link" aria-label="Previous">&laquo;</a>');
            for (var i = 0; i < numPages; i++) {
                $pagination.append('<a href="#" class="page-link" rel="' + i + '">' + (i + 1) + '</a>');
            }
            $pagination.append('<a href="#" class="page-link" aria-label="Next">&raquo;</a>');
            if (numPages > 0) {
                $pagination.find('a').eq(1).addClass('active');
            }
        }

        function showPage(page) {
            $table.find('tbody tr').hide();
            $table.find('tbody tr').slice(page * rowsShown, (page + 1) * rowsShown).show();
            $pagination.find('a').removeClass('active');
            $pagination.find('a').eq(page + 1).addClass('active');
        }

        createPagination();
        showPage(currentPage);

        $pagination.on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($this.attr('aria-label') === 'Previous') {
                if (currentPage > 0) currentPage--;
            } else if ($this.attr('aria-label') === 'Next') {
                if (currentPage < numPages - 1) currentPage++;
            } else {
                currentPage = parseInt($this.attr('rel'));
            }
            showPage(currentPage);
        });

        $select.on('change', function() {
            rowsShown = parseInt($(this).val());
            numPages = Math.ceil(rowsTotal / rowsShown);
            currentPage = 0;
            createPagination();
            showPage(currentPage);
        });
    }

    // Call the function for each table view
    setupPagination('tablaBarrios', 'paginationBarrios', 'recordsPerPageBarrios');
    setupPagination('tablaSuscriptores', 'paginationSuscriptores', 'recordsPerPageSuscriptores');
    setupPagination('tablaLecturas', 'paginationLecturas', 'recordsPerPageLecturas');
    setupPagination('tablaMicromedidores', 'paginationMicromedidores', 'recordsPerPageMicromedidores');
});