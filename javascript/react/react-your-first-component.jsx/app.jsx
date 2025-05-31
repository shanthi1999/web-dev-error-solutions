// Import React library to use JSX and React features
import React from 'react';

// Import your first component from the same folder
import MyFirstComponent from './MyFirstComponent';

// This is the main App component
function App() {
  return (
    <div>
      {/* Render your first component inside the App */}
      <MyFirstComponent />
    </div>
  );
}

// Export the App component so it can be used by ReactDOM
export default App;
