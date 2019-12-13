import React from 'react'
import Link from 'next/link'
import Router from 'next/router' 

const links = [
  { href: '/series', label: 'Series' },
  { href: '/films', label: 'Films' },
  { href: '/recent', label: 'Recently Added' },
  { href: '/list', label: 'My List' },
  { href: '/streaming', label: 'Streaming' },

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const handler = () => {
  Router.push({
    pathname: '/home',
    query: { name: 'test' },
  })
} 

const handleRouteChange = url => {
  alert('App is changing to: ' +  url)
}

Router.events.on('routeChangeError', (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`)
  }
})

Router.events.on('routeChangeStart', handleRouteChange)
Router.events.off('routeChangeStart', handleRouteChange)

const Nav = () => (
  <div>
  <nav>
    <div className="navHolder">
      <ul>
        <li>
          <img src="/logomi.png" alt="logo image"/>
        </li>
        <li className="whitespace">
          &nbsp;
        </li>
        <li>
          <Link href='/' replace scroll={false} passHref prefetch={false}>
            <a>Movies</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a> 
          </li>
        ))}
        
      </ul>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        margin : 0 auto;
      }
      .navHolder {
        background: white;
        padding: 10px 0;
        border: 1px solid #808080;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        align-items: center;
        justify-content: center;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      img {
        max-height : 100px;
      }
      .whitespace {
        width: 50%;
      }
      
    `}</style>
  </nav>
  </div>
)

export default Nav
