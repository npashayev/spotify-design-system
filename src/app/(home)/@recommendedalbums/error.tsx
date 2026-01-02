'use client';

import ErrorBox from '@/components/shared/wrappers/ErrorBox';

export default function Error() {
   return (
      <ErrorBox>
         Failed to fetch recommended albums. Please try again later.
      </ErrorBox>
   );
}
