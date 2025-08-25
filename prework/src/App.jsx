import { useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {

  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },        // main page
    { path: "/creator/:id", element: <ViewCreator /> }, // view page
    { path: "/creator/:id/edit", element: <EditCreator /> }, // edit page
    { path: "/new", element: <AddCreator /> },       // new page
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
