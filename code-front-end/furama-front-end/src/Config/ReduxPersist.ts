import storage from 'redux-persist/lib/storage'

const ReduxPersist = {
    active: true,
    reducerVersion: '1.126',
    storeConfig: {
        key: 'primary',
        storage: storage,
        whitelist: ['auth', 'group', 'globalParamChat', 'userSettingsReducer', 'notificationReducer', 'ThemeColor',
            'selectedLanguage','CourseSelected'],
    },
};

export default ReduxPersist;
