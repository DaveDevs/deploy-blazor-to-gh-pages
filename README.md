# Fork reason

Forked due to: `error NETSDK1194: The "--output" option isn't supported when building a solution` 
This error occurs with latest .Net7 release - `7.0.200`

Usage: [example project and repo](https://github.com/DaveDevs/Financr/blob/main/.github/workflows/main.yml)

Details [here on Steven Giesels site](https://steven-giesel.com/blogPost/554ba273-9594-4d55-aac2-1366e28954b3)

# Deploy Blazor to GitHub Pages

This [GitHub Action](https://github.com/features/actions) publishes and deploys a Blazor WebAssembly project in your repository to your [GitHub Pages](https://pages.github.com/) through the `gh-pages` branch. It can be seen used in the [`blazor-pwa-on-gh-pages`](https://github.com/proulxsamuel/blazor-pwa-on-gh-pages) sample.

This automatically performs all the required setup, including adding the `.nojekyll` file and a `404.html` page redirection workaround which is necessary in order for single-page applications to work in GitHub Pages.

This is based on [Steve Sanderson](https://github.com/SteveSandersonMS)'s [`BlazorOnGitHubPages`](https://github.com/SteveSandersonMS/BlazorOnGitHubPages) example.

# Usage

```yml
steps:
- uses: actions/checkout@v2
- uses: actions/setup-dotnet@v1
  with:
    dotnet-version: '6.0.x'
- uses: proulxsamuel/deploy-blazor-to-gh-pages@master
  with:
    # The path to the Blazor project in the repository.
    # Default: '.'
    project_path: 'path/to/project'   
```

You can see a workflow example [here](https://github.com/proulxsamuel/blazor-pwa-on-gh-pages/blob/master/.github/workflows/deploy.yml).
