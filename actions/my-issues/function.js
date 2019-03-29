function(ellipsis) {
  const groupBy = ellipsis.require('group-by@0.0.1');
const Octokit = ellipsis.require("@octokit/rest@16.21.1");
const github = new Octokit({
  auth: `token ${ellipsis.accessTokens.github}`
});

github.issues.list({
  filter: "assigned"
}).then((res) => {
  const grouped = groupBy(res.data, "repository_url");
  const groupedArray = Object.keys(grouped).map(repo => {
    return { repo: repo, issues: grouped[repo] }
  });
  ellipsis.success(groupedArray);
});
}
