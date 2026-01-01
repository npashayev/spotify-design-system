'use client';

import ErrorBox from "@/components/shared/wrappers/ErrorBox";

export default function Error() {
    return (
        <ErrorBox>
            Failed to fetch new releases. Please try again later.
        </ErrorBox>
    );
};