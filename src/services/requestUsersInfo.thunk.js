import getUserInfo from '../api/getUserInfo';
import { setRequestError, setUsersInfo, toggleIsFetching } from '../store/users-reducer';
import mockData from '../mocks/user-feed.json'

/* const requestUsersInfo = (id) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        const data = await getUserInfo(id);
        dispatch(toggleIsFetching(false));
        if (!Object.keys(data).length || data === 'something went wrong, please try again' || data.error) {
            dispatch(setRequestError(data.error || 'Empty object in userInfo'));
        } else {
            dispatch(setUsersInfo(data));
        }
    } catch (error) {
        dispatch(setRequestError(error.response.data.message));
    }
}; */

const requestUsersInfo = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setUsersInfo(mockData.itemList[0]));
    dispatch(toggleIsFetching(false));
}

export default requestUsersInfo;
