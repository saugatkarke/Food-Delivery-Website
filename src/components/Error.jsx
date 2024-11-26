import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="min-h-screen grid content-center">
      <h1 className="text-9xl">{err.status}</h1>
      <h2>Page {err.statusText}</h2>
      <p>🚫 {err.error.message}</p>
      <a className="text-xl p-8 block w-50 mx-auto" href="/">Homepage</a>
    </div>
  );
}
