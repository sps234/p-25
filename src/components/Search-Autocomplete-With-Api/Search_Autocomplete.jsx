import React, { useEffect, useState } from 'react'

function Search_Autocomplete() {

    const url1 = 'https://dummyjson.com/users';

    const [users, setUsers ] = useState( [] );
    const [ input, setInput ] = useState();

    async function fetchData() {
        try {
        const res = await fetch( url1 );
        const data = await res.json();
        
        // console.log( data );
        
        // const data = res.json();
        // data.then( ( val ) => {
        //     const users = val.users
        //     console.log(users );
        // })

        if ( data && data.users && data.users.length ) {
            const arr = data.users.map( ( x ) => x.firstName ); 
            // console.log( arr );
            setUsers( arr );           
        }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();    
    }, [])
    

    function handleChange( val ) {
        setInput( val );
        // console.log( input );
    }

    function modifyData( input ) {
        // console.log( users);
        if ( input === '' ) {
            fetchData();
            return ;
        }
        const arr2 = users.filter( ( user ) => {
            // if ( user || input ) {
            //     return true
            // } 
            return user.toLowerCase().startsWith( input.toLowerCase() )} 
        );
        setUsers( arr2 );
        console.log( users );
    }

    useEffect(() => {
        modifyData( input );      
    }, [ input ] );
    

  return (
    <>

    <div className='text-center m-5'>
        <div>
            <input type="text" placeholder='search' className='p-2' onChange={ ( e ) => handleChange( e.target.value ) }/>
        </div>
        <div className='m-5'>
            <ul className='list-disc'>
                {   users && 
                    users.map(  ( user, ind ) => {
                        return <li key={ind}> { user } </li>
                    }) 
                }

            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Search_Autocomplete