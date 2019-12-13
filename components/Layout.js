import Link from 'next/link';
import Nav from './nav'
import Footer from './Footer'

const Layout = ({ children, title }) => (
  <div>
    <div>
        <Nav />
        <div className="has-text-centered">{children}</div>
        <Footer />
    </div>
    <style jsx>{`
                .has-text-centered {
                    padding: 10px;
                }
            `}
            </style>
  </div>
);

export default Layout;