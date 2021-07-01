import React, {useState} from 'react';
import Vehicles from './views/ShowVehiclesPage';
import UploadFile from './views/UploadFilePage';
import './css/bootstrap.min.css';

const App = () => {
    const [getState, setState] = useState({
        vehicles: []
    });

    return (
        getState.vehicles.length
            ? <Vehicles vehicles={getState.vehicles}/>
            : <UploadFile setState={setState}/>
    );
}

export default App;