import {persistor, store} from './Redux/Store/ConfigureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import RouterDom from './Router';

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap.bundle.min");
}

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterDom/>
            </PersistGate>
        </Provider>
    );
}

export default App;