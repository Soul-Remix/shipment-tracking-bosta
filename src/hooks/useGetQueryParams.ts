function useGetQueryParams() {
  const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop as string),
  });

  return params;
}

export default useGetQueryParams;
