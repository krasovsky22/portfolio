import Error from '@/components/Error';
import Loading from '@/components/Loading';
import React from 'react';
import { useList } from 'react-firebase-hooks/database';

export interface injectedLoadableProps<T> {
  data: T[];
}

type SimpleFunctionComponent<P> = (props: P) => React.ReactElement;

const withLoadable = <T extends unknown>(
  Component: React.FunctionComponent<injectedLoadableProps<T>>,
  database: firebase.database.Reference
): React.SFC<injectedLoadableProps<T>> => () => {
  const [snapshots, loading, error] = useList(database);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error?.message ?? 'Internal Error.'} />;
  }

  const data = snapshots?.map((snapshot) => snapshot.val()) ?? [];

  return <Component data={data as T[]} />;
};

export default withLoadable;
