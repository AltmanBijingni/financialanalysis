# ALTMAN BIJINGNI | Finance Analytics

A personal finance analytics portfolio and blog for sharing clear, practical work with small fund managers, wealth managers, and consumer or retail finance teams. The site is built with Jekyll and GitHub Pages; it is for publishing a portfolio and blog, not for payments or selling.

## Write a post

1. Copy `_drafts/post-template.md`.
2. Save it in `_posts/` as `YYYY-MM-DD-title.md`, using a date that is today or earlier.
3. Replace the TODO placeholders, add sources, and preview the post.
4. Commit and push the changes to `main`.

Posts in `_posts/` are listed newest first on the blog page. Files in `_drafts/` are not published by default.

## Preview locally (optional)

The local Gemfile uses GitHub Pages 231 to support the Ruby 2.6 runtime available on this Mac. Install Bundler 2.4.22 and use a user-writable gem directory:

```bash
gem install bundler -v 2.4.22 --user-install
export GEM_HOME="$HOME/.gem/ruby/2.6.0"
export GEM_PATH="$GEM_HOME:/Library/Ruby/Gems/2.6.0:/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/gems/2.6.0"
bundle _2.4.22_ install
bundle _2.4.22_ exec jekyll serve --baseurl ""
```

Open the local URL printed by Jekyll, usually `http://127.0.0.1:4000/`.

## Deploy with GitHub Pages

Push the site files to the `main` branch. In the repository, open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.

This repository is currently named `financialanalysis`, so its project site uses `/financialanalysis` as the base URL. If the repository is renamed to `AltmanBijingni.github.io` for a profile site at the domain root, remove `baseurl` from `_config.yml`.

## Break-even calculator

The existing calculator is preserved at `tools/breakeven/index.html` without edits. It is a standalone static page and has no Jekyll front matter.
