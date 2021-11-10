import useSWR from 'swr';
import fetcher from './fetchers';

export default function useFooter() {
  const { data, error } = useSWR(`/api/footer`, fetcher);
  return {
    footer: data?.footer,
    isLoading: !error && !data,
    isError: error,
  };
}
