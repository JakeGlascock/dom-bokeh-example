import Head from 'next/head';
import Header from './Header';

const layoutStyle = {
  margin: 0,
  padding: 0,
  border: 0
};

const makeBig = {
  border: "4px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head >
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <Header />
    <div style={makeBig}>
      <div style={makeBig}>Jake Rocks</div>
      <div style={makeBig}>
        What
        <div style={makeBig}>is</div>
        Up
      </div>
      <div style={makeBig}>With all of this</div>
    </div>
    {props.children}
  </div>
);

export default Layout;
