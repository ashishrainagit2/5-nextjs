import Link from 'next/link';
import NextHead from 'next/head';

const dafaultDescription = "Movie Infomration";
const title = "Movie Website";
const defaultKeywords = "Movie Trailes, Movie Details, Movie Information";

const Head = (props) => (
    <NextHead>
      <title>{props.title || title}</title>
      <meta charSet="UTF-8" />
      <meta 
        name="description"
        content={props.description || dafaultDescription } 
      />
      <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta 
            name="keywords"
            content={props.keywords || defaultKeywords }
        />
    </NextHead>
);

export default Head;