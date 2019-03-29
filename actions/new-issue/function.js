function(title, body, repo, ellipsis) {
  const Octokit = ellipsis.require("@octokit/rest@16.21.1");
const github = new Octokit({
  auth: `token ${ellipsis.accessTokens.github}`
});

const owner = repo.id.split("/")[0];
const repoName = repo.id.split("/")[1];
github.issues.create({
  owner: owner,
  repo: repoName,
  title: title,
  body: body
}).then((res) => {
  ellipsis.success(res.data)
});
}
