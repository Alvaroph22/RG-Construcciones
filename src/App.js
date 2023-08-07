import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";
import {useInterceptor} from "./config/interceptor";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {useStore} from "./config/redux/store";

const App = () => {
    const {store,persist} = useStore();
  useInterceptor(store)
  return (
      <Provider store={store}>
          <PersistGate persistor={persist}>
              <div className="App">
                  <Components />
                  <ScrolToTop/>
                  <Loader/>
              </div>
          </PersistGate>
      </Provider>

  );
}

export default App;