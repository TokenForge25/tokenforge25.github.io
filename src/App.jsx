import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import TokenForm from './TokenForm';

function App() {
  return (
    <>
      <Helmet>
        <title>TokenForge</title>
        <meta name="description" content="Generate tokens with TokenForge" />
      </Helmet>
      <Routes>
        <Route path="/" element={<TokenForm />} />
      </Routes>
    </>
  );
}

export default App;
