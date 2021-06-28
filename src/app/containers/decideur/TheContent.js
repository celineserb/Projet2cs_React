import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

// routes config
import routes from '../../../routes'
import {AbonnementPage,PromotionPage,FacturationPage} from '../../pages/PrivatePages/FacturationsAbonement'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Route path="/facturation/facture" component={FacturationPage} />
            <Route path="/facturation/abonne" component={AbonnementPage} />
            <Route path="/facturation/promotion" component={PromotionPage} />
            <Redirect from="/" to="/GrapheLocation" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
