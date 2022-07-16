import React from "react";
import Skeleton from "react-loading-skeleton";
// Challenge: Implement 'react-loading-skeleton'

// Acceptance Criteria
//   - Import 'react-loading-skeleton' as a default
//   - Check if we have photos, if we don't, render out React loading skeleton with the following props:
//	- count={4}
//	- width={640}
//	- height={500}
//	- className="mb-5"
//   - If we have photos, go ahead and map over the photos (use a dummy value on the return, e.g. <p>I will be a photo!</p>

// References
//   - https://www.npmjs.com/package/react-loading-skeleton
export default function Timeline() {
  const photos = [1,2,3,4,5];
  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
      {photos ? (
        photos.map((photo) => <p>I will be a photo!</p>)
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}
