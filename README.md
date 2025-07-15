# Privatisator

Firefox plugin to open the currently shown page in a private tab: https://addons.mozilla.org/en-US/firefox/addon/privatisator/ .

Gone are the days of Ctrl+L Ctrl+C Ctrl+Shift+P Ctrl+L (this one wasnt necessary, but ... muscle memory 🦾) Ctrl+V .

Especially handy for web dev when you need to see how the current page looks without login/without certain cookies.

~~Should also work in chromium.~~

## Release

```bash
# Bump version in manifest.json, e.g. for minor version
ruby -i -pe '$_.gsub!(/(?<=version": ")(\d.\d)/) {|m| "#{m.to_f + 0.1}"}' manifest.json

# Memorize version
VERSION=$(grep "\"version" manifest.json  | grep -o "[0-9].[0-9]")

# Commit and tag
git add .
git commit -m "v$VERSION"
git tag -a "v$VERSION" -m "v$VERSION"
git push --tags

# Zip it up
zip -r -FS ../privatisator.zip * --exclude '*.git*'
```

Then (upload to MOA)[https://addons.mozilla.org/en-US/developers/].

## Contributions ...

... are welcome under given license and copyright transfer. Most comortable way is to use Github Issues/PRs or pointers to other repositories (e.g. GitLab).

Also, consider upvoting the ideas on Mozilla Connect (Feature Requests), so that we won't need a plugin for this in the future!
E.g. [idea 18640](https://connect.mozilla.org/t5/ideas/move-tab-to-new-private-window/idi-p/18640), [idea 54855](https://connect.mozilla.org/t5/ideas/open-the-current-tab-in-private-normal-mode/idi-p/54855#feedback-success) - please add a PR here if you find even better proposals.

That is also the place to leave Feedack/Bug Reports/Feature Requests/Ideas. Thanks.

## License

Licensed under the GPLv3 or any later, which comes included in this repository as [LICENSE textfile](LICENSE).

Copyright 2025, Felix Wolfsteller.
