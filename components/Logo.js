import Link from 'next/link';

const logoStyle = {
  border: '0'
};

const Logo = () => (
    <Link href="/">
      <a style={logoStyle}>Strideship</a>

      <style jsx>{`
        logo {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
      `}</style>
    </Link>
);

export default Logo;
