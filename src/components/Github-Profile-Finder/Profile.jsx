import React, { useEffect, useState } from 'react'
import { Octokit } from 'octokit';

// 09/10/24  - 10/10/24, 00:45am

function Profile() {    

    const [ user, setUser ] = useState( 'sps234');
    const [ v1, setv1 ] = useState();
    const [ v2, setv2 ] = useState();
    const [ v3, setv3 ] = useState();
    const [ v4, setv4 ] = useState();


    const url1 = "https://github.com/";

    function handleClick (  ) {
      const url2 = url1+user;
      window.open( url2 );
    }

    async function  fetchData ( ) {
        const url1 = `https://api.github.com/users/${user}`;
        // console.log( url1 );
        const res = await fetch( url1  );
        const data = await res.json();
        console.log( data )
        
    }

    
    
    useEffect( (  ) => {
        // fetchData();
        // showContributions();

        // followers();
        // following();
        // repo();

        fetchData2();

    }, [  ])


    const octokit = new Octokit();

    async function followers ( ) {
    const res = await octokit.request(`GET /users/{username}/followers`, {
        username: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      if ( res ) {
        const val = res.data.length;
        setv1(  val ) ;
        // console.log( 'v1 is :', val ); 
      }
    }

    async function following() {
      const res = await octokit.request(`GET /users/{username}/following`, {
        username: user ,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      if ( res ) {
        const val = res.data.length;
        setv2(  val ) ;
        // console.log( 'v2 is :', val ); 
      }
    }

    async function repo() {
      const res = await octokit.request('GET /users/{username}/repos', {
        username: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      if ( res ) {
        const val = res.data.length;
        // console.log( 'repo', val );
        setv3( res.data.length );
      }
    }

    async function fetchData2() {
      const res = await octokit.rest.users.getByUsername( {
        username : user 
      })
      // console.log( res );
      if ( res ) {
        const data = res.data;
        console.log( data );
        const formatedDate = new Date( data.created_at ).toLocaleDateString();
        const v2 = data.public_repos;
        const v3 = data.followers;
        const v4 = data.following;
        setv1( formatedDate );
        setv2( v2 );
        setv3( v3 );
        setv4( v4 );
      }
    }
    

  return (
    <>

    <div className="main m-5 text-center border-solid border-1">

      <div >
          <input type="text" placeholder='Search Github Username' className='border-solid border-2 p-2' value={user} onChange={ ( e ) => { setUser( e.target.value )}}/>
          <button className='rounded bg-blue-400 p-3 ml-2' onClick={ handleClick }> Search </button>
      </div>

      <div>
        <img src="" alt="" />
      </div >

      <div className='m-5'>
      <p> User joined on  { v1 }</p>
      <p> Public Repos : { v2 } </p>
      <p> Followers : { v3  }</p>
      <p> Following : {v4  } </p>
      </div>


      <div>

      </div>




    </div>
    
    </>
    
  )
}

export default Profile