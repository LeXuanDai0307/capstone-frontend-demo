import { Button } from '@libs/shared-components';

import NxWelcome from './nx-welcome';
import { Size } from '@libs/shared-types';

export function App() {
  return (
    <div>
      <Button label="Click to Explore" size={Size.MD} />
      <NxWelcome title="capstone-admin" />
    </div>
  );
}

export default App;
