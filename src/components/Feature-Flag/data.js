const dummyApiResponse = {
    showRandomColor : true,
    showAccordian : true,
    showImageSlider : true,
    showLoadMore : false
}

function featureFlagServiceCall() {
    return new Promise( ( resolve, reject ) => {
        if ( dummyApiResponse) {
            setTimeout( resolve( dummyApiResponse ), 500 );
        }
        else {
            reject( 'Error in fetching' );
        }
    });
}

export default featureFlagServiceCall;