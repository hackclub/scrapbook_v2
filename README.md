# Scrapbook V2

**Scrapbook is the canonical place for Hack Clubbers to share and discover things other Hack Clubbers are working on.**

As a Hack Clubber, you are always learning and building things. Many of us have found that showing up every day has been key to our success in learning. Even if we didn’t make something big or impressive, showing up consistently and making something was key.

Some days, our success isn't measured by the amount of code we wrote, or the number of commits we had, but instead by the hours spent debugging an issue with our application that ended up being a single line code fix. Or maybe it was finally pinpointing the perfect magnet to order to get our 3D printer up and running. Or why not the few chapters of your new programming book you read? Whatever success looked like that day, Scrapbook is there to help you share those wins with the rest of the Hack Club community, and keeps you accountable and motivated by recording a streak of how many days in a row you show up.

Showing up can look like posting a blurb about figuring out how attach a favicon to your site, or maybe sharing a screenshot of the video game character you designed, or it can even be as big as writing an in-depth blog post about how your shader works. Scrapbook allows space for you to decide what success looks like that day, and its goal is to make that process easy.

Your Scrapbook posts will be the artifacts of your learning journey, a place where people can see all of the interesting things you've been working on. And, if you're in a club, Scrapbook can aggregate your club's posts into one canonical area, making it simple to see your club's success over time. If you end up wanting to display these posts on your own applications, Scrapbook provides APIs to do just that.

Visiting Scrapbook should provide a source of inspiration on what to explore next. Visiting the front page will show you the trending posts, surfacing the most interesting things Hack Clubbers are working on. Monthly topics will be suggested, and the community can participate by posting about their topical learnings. Feeling stuck on what technology to try or what to learn next should be a thing of the past.

One of the best feelings of being a part of a community is having other people be excited about what you're working on. Reactions and discussion from Slack are shown on your posts, and Reactions can be added from the web interface. First time posts to Scrapbook are highlighted in the aggregate views, giving the community a chance to give a warm welcome to new posters.

And, of course, your Scrapbook should be a representation of you. Akin to the MySpace days, your Scrapbook is customizable with the ability to add your own CSS, even allowing the ability to customize how your post shows up in the aggregate views.

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

### RedwoodJS

TODO

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

    $ yarn redwood dev

View your GraphQL playground:

    $ open http://localhost:8911/graphql

## Contributing

Contributions are encouraged and welcome! There are two GitHub repositories that contain code for Scrapbook: the [Scrapbook V2 website](https://github.com/hackclub/scrapbook_v2#contributing) and [Scrappy the Slack bot](https://github.com/hackclub/scrappy#contributing).

Development chatter happens in the [#scrapbook-dev](https://app.slack.com/client/T0266FRGM/C035D6S6TFW) channel in the [Hack Club Slack](https://hackclub.com/slack/).

TODO: GitHub Project

## License

Hack Club, 2022. [MIT License](LICENSE.txt).
