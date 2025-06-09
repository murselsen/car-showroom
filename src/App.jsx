import { Suspense, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { vehicleOperations } from "./redux/vehicle";
import { categoryOperations } from "./redux/category";

// Components

const CategoryPage = lazy(() => import("./pages/Category/CategoryPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vehicleOperations.fetchVehicles());
    dispatch(categoryOperations.fetchCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CategoryPage />}  />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
