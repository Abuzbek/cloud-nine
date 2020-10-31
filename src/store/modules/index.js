// import axios from 'axios'
export default {
  actions: {
    fetchCard ({ commit }) {
      const card = [
          {
            _id:'1',
            img:'https://webthemez.com/wp-content/uploads/2017/07/tycoon-business-website-template.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'2',
            img:'https://webthemez.com/wp-content/uploads/2017/08/ultimate-business-responsive-html-web-template.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'3',
            img:'https://s3.envato.com/files/236601680/screenshot/01_preview.__large_preview.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'4',
            img:'https://s3.envato.com/files/230426640/screenshotpicts/00_preview.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'5',
            img:'https://i.pinimg.com/originals/f8/f6/56/f8f656fd473305405d82d4a64f777a85.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'6',
            img:'https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0412697.png?v=2.6.3',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'7',
            img:'https://digitaltemplatemarket.com/wp-content/uploads/2018/03/Travel-Geo.png',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'8',
            img:'https://s.tmimgcdn.com/scr/800x500/51500/free-website-template-real-estate-website-template_51575-0-original.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'9',
            img:'https://webthemez.com/wp-content/uploads/2018/02/swift-car-wash-template.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
          {
            _id:'10',
            img:'https://s3.envato.com/files/230426640/screenshotpicts/00_preview.jpg',
            title:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.',
            link:'#!',
            item:'Web Site'
          },
      ]
      commit('card', card)
    }
  },
  mutations: {
    card (state, posts) {
      state.card = posts
    }
  },
  state: {
    card: []
  },
  getters: {
    card (state) {
      return state.card
    }
  }
}
