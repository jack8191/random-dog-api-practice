//We need a function to access the api data
//We need a function to spit the result into html
//We need a function to render the result to the dom
//We need a function to handle the form submission and kick all the other functions off

function getDataFromApi(searchTerm, callback) {
    let url = `https://dog.ceo/api/breeds/image/random/${searchTerm}`;
    let params = searchTerm;
    $.getJSON(url, params, callback);
}



function createResultList(result){
    const results = result.message.map((item) => renderResult(item));
    $('.js-search-results').html(results);
  
}



function renderResultList(results){
    let imageList = []
    
    for (i = 0; i < results.length; i++) {
        imageList.push(`
    <img src="${results.message[i]}" class=results-img atl="a random dog image"><br>`);
    };
    return imageList;
    
}

function watchSubmit() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        getDataFromApi(query, createResultList);
      });

}

$(watchSubmit);