import '../styles/globals.css';
import ReactQueryWrapper from './ReactQueryWrapper';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap' rel='stylesheet' />
    </head>
    <body className='font-raleway'>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </body>
  </html>
);

export default RootLayout;
