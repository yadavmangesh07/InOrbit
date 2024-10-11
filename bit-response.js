const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  const { context } = require("@actions/github");
  const prNumber = context.payload.pull_request.number;
  const repo = context.repo.repo;
  const owner = context.repo.owner;

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: "Thank you for your pull request! We will review it shortly.",
  });
}

run().catch((error) => {
  console.error(`Failed to add comment to PR: ${error.message}`);
  process.exit(1);
});