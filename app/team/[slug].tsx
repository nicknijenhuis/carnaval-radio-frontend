import { useRouter } from 'next/router';
import { useEffect } from 'react';

function TeamMemberPage() {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            router.replace(`/team#${slug}`, undefined, { shallow: true });
        }
    }, [router, slug])


    return null;
}

export default TeamMemberPage;