import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <div
        className={`min-h-screen bg-background  text-textDark  w-full overflow-y-auto`}
      >
        {/* Suspense wraps RouterProvider for lazy-loaded routes */}
        <Suspense
        // fallback={
        //   <div className="flex justify-center items-center h-screen bg-background text-primary text-2xl  ">
        //     <Loader />
        //   </div>
        // }
        >
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
