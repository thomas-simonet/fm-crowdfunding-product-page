export const state = () => ({
  thumbnail: ''
})

export const getters = {
  getThumbnail: state => state.thumbnail
}

export const mutations = {
  SET_HEADER_THUMBNAIL (state, thumbnail) {
    // state.thumbnail = Object.assign({}, state.thumbnail, thumbnail)
    state.thumbnail = thumbnail
  }
}
