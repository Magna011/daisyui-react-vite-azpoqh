import React, { useState } from 'react';

const App1 = () => {
  const longLoremText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec quam elit. Fusce vel libero sit amet ante aliquet mattis. Aliquam eget dui eu dolor pellentesque scelerisque non ut dui. Proin non metus id purus semper cursus. Sed et nisi ac augue tincidunt vehicula a et metus. Nulla facilisi. Duis et felis id elit consequat posuere. Integer rhoncus sollicitudin tellus, vel tincidunt augue vulputate ac. Ut bibendum rhoncus neque, a interdum orci venenatis a. Donec elementum dui eget augue dictum, id tempus quam aliquet. Proin quis scelerisque ligula. Suspendisse tincidunt interdum mi, nec vestibulum neque euismod sit amet. Donec eget leo quam. Curabitur dignissim ultrices turpis, eu hendrerit orci sodales sed. Fusce ultrices, odio non blandit gravida, nisl tortor varius nulla, in fermentum ante libero at dui.
  `;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="App1">
      <p>{showMore ? longLoremText : longLoremText.substring(0, 200)}</p>
      {longLoremText.length > 200 && (
        <button onClick={toggleShowMore}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default App1;
