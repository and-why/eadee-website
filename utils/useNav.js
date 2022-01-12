import useSWR from 'swr';
import fetcher from './fetchers';

export default function useNav() {
  const { data, error } = useSWR(`/api/navigation`, fetcher);
  return {
    nav: data?.nav,
    isLoading: !error && !data,
    isError: error,
  };
}
