import Micromodal from 'micromodal'

export default ({ app }, inject) => {
  // Ceci injecte $hello(msg) dans Vue, dans le context et le store.
  inject('modal', Micromodal)
}
