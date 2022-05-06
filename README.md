-------------

> ⚠️ Scrapbook V2 is on hold for the time being!

-------------

# Scrapbook V2

**Better yourself by chronicling your technical journey.**

Scrapbook is the largest community of teenage makers and hackers sharing what they’re learning and working on every day. Hack Clubbers have found that showing up every day has been key to their success in learning.

1. Log what you worked on today
2. Earn a streak and get socially meaningful recognition for your progress
3. Get inspired by what others are doing

Scrapbook integrates with the Hack Club Slack, has an extensive API for integrating into your personal website, and connects with all of the places where you’re already doing work - like GitHub.

The purpose of Scrapbook is to keep you inspired and accountable on your learning and making journey. Every Scrapbook is unique: you can completely customize yours with CSS, there’s an extensive API to build your entirely own frontend or publishing flow, and both the code and database are open source.

## What's different in V2?

Scrapbook V2 is a fork of the original Scrapbook. The original Scrapbook was made during the Summer of Making, and is a fantastic Slack integration tool for the online Hack Club community. The purpose of V2 is to take the original Scrapbook vision and expand it to the rest of the community, as a lot of Hack Clubbers aren't on Slack. V2 will make Scrapbook a fully featured web application, so all Hack Clubbers can share their learnings without Slack being a barrier to entry. But have no fear, Slack integration isn't going anywhere!

### New feature set:
_Note: this list is WIP!_
- Ability to sign up and log in on the web
- Ability to link your slack to your web account
- Posting from the web
- Filtering the aggregate view (trending, recent posts, brand new posters)
- More flexibility around posting (text-only posts, longer form posts)
- Showing discussion and reaction count on the web
- Ability to increment reactions from web
- Ability to add tags to a post and filter by those tags
- Ability to mark posts as draft (for longer-form posts)
- Ability to add CSS from the web
- Ability to add CSS to your post in the aggregate views
- Highlighting new user posts in the aggregate views
- Monthly topics
- APIs for your post data
- Posting web posts to Slack

### Potential future ideas:
- Chrome extension for adding it to your New Tab page
- Pinning posts to the top
- Streak badges

## How to share

### Via the web
When you visit Scrapbook's site, you will see the current trending posts on the site. When you click the "share" button, you'll see a sharing form that has only the required post fields and, if you're logged out, an e-mail and password field. If you have an account, you'll be logged in. If you don't have an account, you'll be redirected to your pending post, and you'll get a verification e-mail. Once you click that e-mail link, it verifies your account and publishes your post.

### Via Slack
Your Scrapbook is automatically generated for you when you make your first Scrapbook post. In order to post, you'll need to join the Hack Club Slack. Once you've completed the onboarding flow in Slack and have access to all of the channels, join the #scrapbook channel. From here, Scrapbook posts are automatically generated for you when you post a message in the #scrapbook channel.

## Technology

WIP

### RedwoodJS

### Tailwind

## Setup

TODO:
- [ ] yarn
- [ ] node, nvm
- [ ] local postgres setup

## Running locally

Clone this repository:

    $ git clone https://github.com/hackclub/scrapbook_v2.git && cd scrapbook_v2

Install dependencies:

    $ yarn

Send a message mentioning `@creds` in [Hack Club's Slack](https://hackclub.com/slack/) asking for the `.env` file

Start server:

    $ yarn rw dev

It should automatically open, but if not, open your server:

    $ open http://localhost:8910/

## Viewing your database

Open Prisma Studio:

    $ yarn rw prisma studio

It should automatically open, but if not, open your server

    $ open http://localhost:5555/

## GraphQL Playground

Start the application server if it hasn't been started yet:

    $ yarn rw dev

View your GraphQL playground:

    $ open http://localhost:8911/graphql

## Contributing

Contributions are encouraged and welcome! There are two GitHub repositories that contain code for Scrapbook: the [Scrapbook V2 website](https://github.com/hackclub/scrapbook_v2#contributing) and [Scrappy the Slack bot](https://github.com/hackclub/scrappy#contributing).

Development chatter happens in the [#scrapbook-dev](https://app.slack.com/client/T0266FRGM/C035D6S6TFW) channel in the [Hack Club Slack](https://hackclub.com/slack/).

TODO: GitHub Project

## License

Hack Club, 2022. [MIT License](LICENSE.txt).
