import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/routes/Home.jsx';
// import SectionBody from './components/SectionBody/SectionBody';
// import ProductDetails from './components/routes/ProductDetails';
// import DetailsOfButton from './components/routes/DetailsOfButton';
// import GenericValueProvider from './providers/GenericValueProvider';
// import Update from './components/routes/Update';
// import AddProduct from './components/routes/AddProduct';
import AuthProvider from './providers/AuthProvider'
import SignUp from './components/routes/SignUp';
// import FormValidationProvider from './providers/FormValidationProvider';
import Login from './components/routes/Login';
// import PrivateRoute from './components/routes/PrivateRoute';
// import MyCart from './components/routes/MyCart';
// import CartProdiver from './providers/CartProvider';
import ErrorPage from './components/routes/ErrorPage';
import FormValidationProvider from './providers/FormValidationProvider.jsx';
import AllJobs from './components/routes/AllJobs.jsx';
import AppliedJobs from './components/routes/AppliedJobs.jsx';
import AddAJob from './components/routes/AddAJob.jsx';
import MyJobs from './components/routes/MyJobs.jsx';
import Blogs from './components/routes/Blogs.jsx';
import WrapperOfHome from './components/routes/WrapperOfHome.jsx';
import ViewDetails from './components/routes/ViewDetails.jsx';
import UpdateAJob from './components/routes/UpdateAJob.jsx';
// import SuccessMessage from './components/routes/SuccessMessage';
// import EmailProvider from './providers/EmailProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <WrapperOfHome></WrapperOfHome>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/addAJob",
        element: <AddAJob></AddAJob>
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/view-details/:detailsId",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "/update/:updateId",
        element: <UpdateAJob></UpdateAJob>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FormValidationProvider>
        <RouterProvider router={router} />
      </FormValidationProvider>
    </AuthProvider>
  </React.StrictMode>,
)
