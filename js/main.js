
// $(document).ready(() => {
//     $('#searchForm').on('submit', (e) => {
//         let searchText = $('#searchText').val();
//         getMovies(searchText);
//         e.preventDefault();
//     });
// });

getMovies(searchText);

function getMovies(searchText) {

    for (let pageNumber = 1; pageNumber < 3; pageNumber++) {
        axios.get('http://www.omdbapi.com/?apikey=7b13f085&type=movie&s=love&page=' + pageNumber)
            .then((response) => {
                console.log(response);
                let movies = response.data.Search;
                let output = '';
                $.each(movies, (index, movie) => {
                    output += `
                    <div class="item">
                        <div class="well text-center">
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                        </div>
                    </div>
                `;
                });

                $('#movies').html(output);


            })
            .catch((err) => {
                console.log(err);
            });


    }
};

const $modal = $('.bg-modal');
const $modalContent = $('.modal-content');

$(document).mouseup(e => {
    if (!$modalContent.is(e.target) // if the target of the click isn't the container...
    && $modalContent.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $modal.removeClass('show');
   }
  });

  $(document).mouseup(e => {
    if (!$modal.is(e.target) // if the target of the click isn't the container...
    && $modal.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $modal.addClass('show');
   }
  });


