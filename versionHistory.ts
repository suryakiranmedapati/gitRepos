import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER = 'your-username'; // Replace with the repository owner's username
const REPO_NAME = 'your-repo'; // Replace with the repository name
const ACCESS_TOKEN = 'your-personal-access-token'; // Replace with your GitHub personal access token

async function fetchCommits() {
    try {
        const response = await axios.get(
            `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/commits`,
            {
                headers: {
                    Authorization: `token ${ACCESS_TOKEN}`,
                },
            }
        );

        const commits = response.data;
        console.log('Version History and Commits:');
        commits.forEach((commit: any, index: number) => {
            console.log(`Commit #${index + 1}`);
            console.log(`Author: ${commit.commit.author.name}`);
            console.log(`Date: ${commit.commit.author.date}`);
            console.log(`Message: ${commit.commit.message}`);
            console.log('---------------------------');
        });
    } catch (error) {
        console.error('Error fetching commits:', error.message);
    }
}

fetchCommits();