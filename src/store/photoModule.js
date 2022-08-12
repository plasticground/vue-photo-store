import axios from "axios";

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    mutations: {
        addPhoto(state, payload) {
            state.photos.unshift(payload);
        },
        setPhotos(state, payload) {
            state.photos = payload;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        },
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
    },
    getters: {
        getAllPhotos: (state) => state.photos,
        getDialogVisible: (state) => state.dialogVisible,
        getCurrentPhoto: (state) => state.currentPhoto,
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
                .then(response => context.commit('setPhotos', response.data));
        }
    }
}