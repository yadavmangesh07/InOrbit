import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  const prNumber = context.payload.pull_request.number;
  const repo = context.repo.repo;
  const owner = context.repo.owner;

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: "Thank you for your contribution! We're excited to review your pull request and will get back to you soon.",
  });
}

run().catch((error) => {
  console.error(`Failed to add comment to PR: ${error.message}`);
  process.exit(1);
});