import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Header = ({ reactions, children }) => (
  <>
    <div className='hero'>
      {children}
      <h1 className='title'>Hack Club’s Scrapbook</h1>
      <p className='description'>
        A daily diary of what <a href="https://hackclub.com/">Hack Clubbers</a>{' '}
        are learning & making every day.
      </p>
      <article className="post-reactions">
        <h2 className="headline">Explore</h2>
        {reactions.map(reaction => (
          <Reaction key={reaction.name} {...reaction} />
        ))}
      </article>
    </div>
    <style jsx>{`
      .hero {
        text-align: center;
        padding: 0 12px 48px;
      }
      .title {
        color: var(--colors-orange);
        font-family: var(--fonts-display);
        margin: 0;
        font-size: 36px;
        line-height: 1;
        padding: 16px;
      }
      .description {
        font-size: 18px;
        color: var(--colors-text);
      }
      @media (min-width: 32em) {
        .title {
          font-size: 48px;
        }
        .description {
          font-size: 24px;
        }
        .hero {
          padding: 24px 0 48px;
        }
      }
      @media (min-width: 48em) {
        .title {
          font-size: 64px;
        }
      }
      .description > a {
        color: var(--colors-orange);
        text-decoration: none;
      }
      .description > a:hover,
      .description > a:focus {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-underline-position: under;
      }
      @supports (-webkit-background-clip: text) {
        .title {
          background-image: radial-gradient(
            ellipse farthest-corner at top left,
            var(--colors-yellow),
            var(--colors-orange)
          );
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .post-reactions {
        justify-content: center;
        align-items: center;
        margin-top: 12px;
      }
      .headline {
        margin: 0 16px 12px;
        font-size: 18px;
      }
    `}</style>
  </>
)

const HomePage = () => {
  return (
    <>
      <MetaTags title="Scrapbook" description="Scrapbook" />
      <Header reactions={[]} />
      <p>Welcome to Scrapbook!</p>
    </>
  )
}

export default HomePage
