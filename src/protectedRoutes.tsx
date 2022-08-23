import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoutes: React.FC = ({auth, component: Component,...rest}) => {
//     return (
//       <Route
//         {...rest}
//         render={(routeProps) =>
//           auth ? (
//             <Component {...routeProps} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: routeProps.location },
//               }}
//             />
//           )
//         }
//       />
//     );
// }

// export default  ProtectedRoutes;
const ProtectedRoutes = ({auth, component: Component,...rest}: any) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoutes;