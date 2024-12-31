import { Octokit } from 'octokit';

const octokit = new Octokit();

async function showContributions ( ) {
    const res = await octokit.request('GET /users/{username}/followers', {
        username: 'sps234',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

    const data = res;
    console.log( data );    
}


showContributions();