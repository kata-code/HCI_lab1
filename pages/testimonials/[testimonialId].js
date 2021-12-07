import { useRouter } from 'next/dist/client/router';

const TestimonialPage = () => {
  const router = useRouter();

  return (
    <h1 className="text-center text-2xl p-20">
      Hi from {router.query.testimonialId}
    </h1>
  );
};

export default TestimonialPage;
