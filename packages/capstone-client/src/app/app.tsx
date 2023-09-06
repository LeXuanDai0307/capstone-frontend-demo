import { Route, Routes, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import NxWelcome from './nx-welcome';
import { IBook, ESize } from '@libs/shared-common';
import { Button } from '@libs/shared-components';

const GET_BOOK = gql`
  query GetBook($id: String!) {
    Books {
      book(id: $id) {
        id
        title
      }
    }
  }
`;

export function App() {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: '11111' },
  });
  const book: IBook = data?.Books?.book || null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Book title: {book?.title || 'Book title'}</h1>
      <Button label="Click me" size={ESize.LG} />
      <NxWelcome title="capstone-client" />
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
