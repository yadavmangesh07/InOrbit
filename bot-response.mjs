import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  const prNumber = context.payload.pull_request.number;
  const repo = context.repo.repo;
  const owner = context.repo.owner;
  const pullRequestTitle = context.payload.pull_request.title; // Retrieve pull request title

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: `🚀 **In-Orbiter Chief reporting in!** 🚀
      
      Hello, Commander! 👨‍🚀👩‍🚀

      I've successfully received your latest pull request titled: **"${pullRequestTitle}"**. 
      My orbital sensors are analyzing the code and keeping an eye on any space debris (conflicts, errors) that might block our path. 🛰️

      If everything looks clear from your end, we should be ready to proceed with the mission. Otherwise, let's fix those hiccups before the countdown! 🔧🛠️

      Stay awesome, and may your code launch successfully! 🌌`,
  });
}

run().catch((error) => {
  console.error(`Failed to add comment to PR: ${error.message}`);
  process.exit(1);
});
