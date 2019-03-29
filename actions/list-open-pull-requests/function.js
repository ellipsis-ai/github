function(repo, ellipsis) {
  const GitHubApi = ellipsis.require("@octokit/rest@16.21.1");
const Octokit = ellipsis.require("@octokit/rest@16.21.1");
const github = new Octokit({
  auth: `token ${ellipsis.accessTokens.github}`
});

const owner = repo.id.split("/")[0];
const repoName = repo.id.split("/")[1];
github.pulls.list({
  owner: owner,
  repo: repoName
}).then((res) => {
  const msg =
    res.data.length === 0 ?
      `No open PRs for the **${repo.label}** repo. Go for a walk or something.` :
      `PRs open at the moment for the **${repo.label}** repo:`;
  ellipsis.success({ msg: msg, prs: res.data });
});
}
