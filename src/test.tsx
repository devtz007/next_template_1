import React from 'react';

import ggg from '@/app/(home)/page';

const TestComponent = () => {
  return (
    <div
      className="container"
      id="test-container"
      data-testid="test-element"
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
      }}
    >
      <p className="text-lg" id="paragraph" style={{ color: 'blue' }}>
        This is a test paragraph.
      </p>
    </div>
  );
};

export default TestComponent;
