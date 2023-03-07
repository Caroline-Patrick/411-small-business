const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
        .then((res) => res.json())
        .then((response) => {
            const action = {
                type: 'FETCH_BUSINESSES',
                value: response.Results,
            };
            dispatch(action);
        });
    };
};

export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}