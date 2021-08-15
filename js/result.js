



  let result = window.location.search.substring(1).split('&');

  for (let item in result) {
    console.log(result[item]);
    $('#resultOutputUsername').html(result[0].substring(9));
    $('#resultOutputEmail').html(result[1].substring(6));
    $('#resultOutputPassword').html(result[2].substring(9));
  }