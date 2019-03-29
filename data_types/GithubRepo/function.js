function(filter, ellipsis) {
  const Octokit = ellipsis.require("@octokit/rest@16.21.1");
const github = new Octokit({
  auth: `token ${ellipsis.accessTokens.github}`
});

github.repos.list({
  per_page: 100
}).then((res) => {
  const filtered = res.data.filter((ea) => ea.full_name.toLowerCase().includes(filter))
  ellipsis.success(filtered.map((ea) => {
    return { id: ea.full_name, label: ea.full_name };
  }));
});
}
