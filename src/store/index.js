import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    order: [],
    payment: [],
    delivery: [],
    fabricator: [
      {
        id: 1,
        img: 'http://dillisix.com/storage/56/Dheeraj-Sardar.jpeg',
        status: 'Access Granted',
        role: 'Admin',
        assignee_code: '23',
        name: 'Dheeraj Sardar',
        contact: '665588744',
        email: 'dhes@gmail.com',
        password: '95622wee',
      },
      {
        id: 2,
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        status: 'Access Granted',
        role: 'Assignee',
        assignee_code: '23',
        name: 'Hari Shankar Sharma',
        contact: '665588744',
        email: 'hari@gmail.com',
        password: '95622wee',
      },
      {
        id: 3,
        img: 'http://dillisix.com/storage/54/kedar.jpg',
        status: 'Access Granted',
        role: 'Assignee',
        assignee_code: '23',
        name: 'Kedar',
        contact: '665588744',
        email: 'hari@gmail.com',
        password: '95622wee',
      },
    ],
    supplier: [
      {
        id: 1,
        img: 'http://dillisix.com/storage/56/Dheeraj-Sardar.jpeg',
        status: 'Access Granted',
        role: 'Admin',
        assignee_code: '23',
        name: 'Dheeraj Sardar',
        contact: '665588744',
        email: 'dhes@gmail.com',
        password: '95622wee',
      },
      {
        id: 2,
        img: 'http://dillisix.com/storage/56/Dheeraj-Sardar.jpeg',
        status: 'Access Granted',
        role: 'Assignee',
        assignee_code: '23',
        name: 'Hari Shankar Sharma',
        contact: '665588744',
        email: 'hari@gmail.com',
        password: '95622wee',
      },
      {
        id: 3,
        img: 'http://dillisix.com/storage/56/Dheeraj-Sardar.jpeg',
        status: 'Access Granted',
        role: 'Assignee',
        assignee_code: '23',
        name: 'Hari Shankar Sharma',
        contact: '665588744',
        email: 'hari@gmail.com',
        password: '95622wee',
      },
    ],
    customer: [],
    members: [
      {
        id: 8,
        name: 'Shankar',
        role: 'Assignee',
        rate: 80,
        dept: 'Stiching',
        post: 'Worker',
        imgu: "img/members/ramesh.jpg"
      },
      {
        id: 7,
        name: 'Hari',
        role: 'Assignee',
        rate: 50,
        dept: 'Finishing',
        post: 'Worker',
        imgu: "img/members/suresh.jpg"
      },
      {
        id: 6,
        name: 'Sameer',
        role: 'Assignee',
        rate: 60,
        dept: 'Stiching',
        post: 'Incharge',
        imgu: "img/members/dharmesh.jpg"
      },
      {
        id: 5,
        name: 'Vishnu',
        role: 'Manager',
        rate: 70,
        dept: 'Finishing',
        post: 'Incharge',
        imgu: "img/members/mohan.jpg"
      },
      {
        id: 9,
        name: 'Parshad',
        role: 'Assignee',
        rate: 90,
        dept: 'Fabricator',
        post: 'Incharge',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 12,
        name: 'Amit Sardar',
        role: 'Assignee',
        rate: 50,
        dept: 'Shop',
        post: 'Owner',
        imgu: "img/members/Amit.jpg"
      },
      {
        id: 2,
        name: 'Suresh',
        role: 'Admin',
        rate: 60,
        dept: 'Stiching',
        post: 'Worker',
        imgu: "img/members/Kedar.jpg"
      },
      {
        id: 1,
        name: 'Mohan',
        role: 'Creator',
        rate: 50,
        dept: 'Cutting',
        post: 'Worker',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 3,
        name: 'Ramesh',
        role: 'Admin',
        rate: 70,
        dept: 'Finishing',
        post: 'Worker',
        imgu: "img/members/Modern.jpg"
      },
      {
        id: 4,
        name: 'Dharmesh',
        role: 'Assignee',
        rate: 80,
        dept: 'Finishing',
        post: 'Worker',
        imgu: "img/members/Narender.jpg"
      },
      {
        id: 10,
        name: 'Dharmender',
        role: 'Assignee',
        rate: 90,
        dept: 'Fabricator',
        post: 'Worker',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 11,
        name: 'Rahul',
        role: 'Assignee',
        rate: 50,
        dept: 'Fabricator',
        post: 'Worker',
        imgu: "img/members/jyoti.jpg"
      },

    ],
    // ---------------------------------------------
    datas: [
      {
        id: 1,
        num: 7,
        txt: "NEW ORDERS"

      },
      {
        id: 2,
        num: 44,
        txt: "PRE PRODUCTION"
      },
      {
        id: 3,
        num: 3,
        txt: "IN PRODUCTION"
      },
      {
        id: 4,
        num: 54,
        txt: "TOTAL ORDERS"
      },
      {
        id: 5,
        num: 11,
        txt: "ACTIVE ASSIGNEES"
      },
      {
        id: 6,
        num: 78,
        txt: "ACTIVE CATELOGS"
      },
    ],
    datapps: [
      {
        id: 1,
        num: 1750,
        txt: "RUNNING ORDER QUANTITY"

      },
      {
        id: 2,
        num: 855,
        txt: "READY QUANTITY AVAILABLE"
      },
      {
        id: 3,
        num: 450,
        txt: "REQUESTED QUANTITY"
      },
      {
        id: 4,
        num: 450,
        txt: "DISPATCHED QUANTITY"
      },
      {
        id: 4,
        num: '-',
        txt: "RECEVIED QUANTITY"
      },

    ],
    cards: [
      {
        id: 1,
        name: 'Sardar Enterprise',
        allot: 20,
        img: "fabricators/fab1.png",
        num: "2/850",
      },
      {
        id: 2,
        name: 'Pride Apparel',
        allot: 16,
        img: "fabricators/fab2.png",
        num: "2/1400",
      },
      {
        id: 3,
        name: 'Jyoti Garments',
        allot: 1,
        img: "fabricators/fab3.png",
        num: "1/200",
      },
      {
        id: 4,
        name: 'Mayra Creation',
        allot: 4,
        img: "fabricators/fab4.png",
        num: "6/1257",
      },
      {
        id: 5,
        name: 'Md Asad',
        allot: 3,
        img: "fabricators/fab1.png",
        num: "3/659",
      },
      {
        id: 6,
        name: 'Manoj Auto',
        allot: 2,
        img: "fabricators/fab2.png",
        num: "2/400",
      },
      {
        id: 7,
        name: 'Shekhar Trafdar',
        allot: 'No',
        img: "fabricators/fab3.png",
        num: "Nill",
      },
      {
        id: 8,
        name: 'Modern Collection',
        allot: 1,
        img: "fabricators/fab4.png",
        num: "2/200",
      },
    ],
    lists: [
      {
        id: 1,
        img: "images/c1.jpg",
        styleid: '#45957',
        total: '1,000',
        price: 500,
        moq: 350,
        quantity: 60,
        message: null,
        created_at: '2023-08-29',
        expected_at: '2023-08-29',
        fabricator_id: 1,
        jwoi: 'JWO-1693312813-1',
        status: "issued",
        images: [
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",
          "images/c1.jpg",
        ],
        colors: [
          { id: 1, name: 'black', img: "images/c1.jpg", isSelected: true },
          { id: 2, name: 'red', img: "images/c1.jpg", isSelected: true },
          { id: 3, name: 'white', img: "images/c1.jpg", isSelected: true },
          { id: 4, name: 'green', img: "images/c1.jpg", isSelected: true },
          { id: 5, name: 'purple', img: "images/c1.jpg", isSelected: true },
        ],
        sizes: [
          {
            id: 1, name: "S", isSelected: true
          },
          {
            id: 2, name: "M", isSelected: true
          },
          {
            id: 3, name: "L", isSelected: true
          },
          {
            id: 4, name: "XL", isSelected: true
          },
          {
            id: 5, name: "XXL", isSelected: true
          },
          {
            id: 6, name: "Free", isSelected: true
          },
        ],
      },
      // {
      //   id: 2,
      //   img: "images/c2.jpg",
      //   img1: "images/c2.jpg",
      //   tag: "#23252",
      //   name: 'Spun Twill 3 PC',
      //   sp: "85",
      //   panna: "59 Inch | 1.4986 Mtr",
      //   fc: "115 Grm",
      //   stag: "23269, 23269, Massa Rib, 1/1 top",
      //   total: '5,000',
      //   images: [
      //     "images/c2.jpg",
      //     "images/c2.jpg",
      //     "images/c2.jpg",
      //     "images/c2.jpg",
      //   ],
      //   styleid: '#45957',
      //   colors: [
      //     { id: 1, name: 'hotpink', img: "images/c2.jpg", isSelected: true },
      //     { id: 2, name: 'greenyellow', img: "images/c2.jpg", isSelected: true },
      //     { id: 2, name: 'voilet', img: "images/c2.jpg", isSelected: true },
      //     { id: 2, name: 'cyan', img: "images/c2.jpg", isSelected: true },
      //   ],
      //   sizes: [
      //     {
      //       id: 1, name: "S", isSelected: true
      //     },
      //     {
      //       id: 2, name: "M", isSelected: true
      //     },
      //     {
      //       id: 3, name: "L", isSelected: true
      //     },
      //     {
      //       id: 4, name: "XL", isSelected: true
      //     },
      //     {
      //       id: 5, name: "XXL", isSelected: true
      //     },
      //     {
      //       id: 6, name: "Free", isSelected: true
      //     },
      //   ],
      // },
      // {
      //   id: 3,
      //   img: "images/c3.jpg",
      //   tag: "#232234",
      //   name: 'RIB TOP',
      //   sp: "85",
      //   panna: "59 Inch | 1.4986 Mtr",
      //   fc: "115 Grm",
      //   stag: "23269, 23269, Massa Rib, 1/1 top",
      //   total: '3,000',
      //   images: [
      //     "images/c3.jpg",
      //     "images/c3.jpg",
      //     "images/c3.jpg",
      //     "images/c3.jpg",
      //   ],
      //   styleid: '#78459',
      //   colors: [
      //     { id: 1, name: 'Yellow', img: "images/c3.jpg", isSelected: true },
      //     { id: 2, name: 'purple', img: "images/c3.jpg", isSelected: true },
      //     { id: 3, name: 'green', img: "images/c3.jpg", isSelected: true },
      //     { id: 4, name: 'khaki', img: "images/c3.jpg", isSelected: true },
      //   ],
      //   sizes: [
      //     {
      //       id: 1, name: "S", isSelected: true
      //     },
      //     {
      //       id: 2, name: "M", isSelected: true
      //     },
      //     {
      //       id: 3, name: "L", isSelected: true
      //     },
      //     {
      //       id: 4, name: "XL", isSelected: true
      //     },
      //     {
      //       id: 5, name: "XXL", isSelected: true
      //     },
      //     {
      //       id: 6, name: "Free", isSelected: true
      //     },
      //   ],
      // },
      // {
      //   id: 4,
      //   img: "images/c4.jpg",
      //   tag: "#232123",
      //   name: 'Zuric two pc',
      //   sp: "85",
      //   panna: "59 Inch | 1.4986 Mtr",
      //   fc: "115 Grm",
      //   stag: "23269, 23269, Massa Rib, 1/1 top",
      //   total: '2,000',
      //   images: [
      //     "images/c4.jpg",
      //     "images/c4.jpg",
      //     "images/c4.jpg",
      //   ],
      //   styleid: '#75984',
      //   colors: [
      //     { id: 1, name: 'brown', img: "images/c4.jpg", isSelected: true },
      //     { id: 2, name: 'red', img: "images/c4.jpg", isSelected: true },
      //     { id: 3, name: 'brown', img: "images/c4.jpg", isSelected: true },
      //   ],
      //   sizes: [
      //     {
      //       id: 1, name: "S", isSelected: true
      //     },
      //     {
      //       id: 2, name: "M", isSelected: true
      //     },
      //     {
      //       id: 3, name: "L", isSelected: true
      //     },
      //     {
      //       id: 4, name: "XL", isSelected: true
      //     },
      //     {
      //       id: 5, name: "XXL", isSelected: true
      //     },
      //     {
      //       id: 6, name: "Free", isSelected: true
      //     },
      //   ],
      // },
      // {
      //   id: 5,
      //   img: "images/c5.jpg",
      //   tag: "#232565",
      //   name: "1/1 Top",
      //   sp: "85",
      //   panna: "59 Inch | 1.4986 Mtr",
      //   fc: "115 Grm",
      //   stag: "23269, 23269, Massa Rib, 1/1 top",
      //   total: '999',
      //   images: [
      //     "images/c6.jpg",
      //     "images/c6.jpg",
      //     "images/c6.jpg"
      //   ],
      //   styleid: '#78412',
      //   colors: [
      //     { id: 1, name: 'black', img: "images/c4.jpg", isSelected: true },
      //     { id: 2, name: 'blue', img: "images/c4.jpg", isSelected: true },
      //     { id: 3, name: 'red', img: "images/c4.jpg", isSelected: true },
      //   ],
      //   sizes: [
      //     {
      //       id: 1, name: "S", isSelected: true
      //     },
      //     {
      //       id: 2, name: "M", isSelected: true
      //     },
      //     {
      //       id: 3, name: "L", isSelected: true
      //     },
      //     {
      //       id: 4, name: "XL", isSelected: true
      //     },
      //     {
      //       id: 5, name: "XXL", isSelected: true
      //     },
      //     {
      //       id: 6, name: "Free", isSelected: true
      //     },
      //   ],
      // },
      // {
      //   id: 6,
      //   img: "images/c6.jpg",
      //   tag: "#69646",
      //   name: "1/1 Top",
      //   sp: "85",
      //   panna: "59 Inch | 1.4986 Mtr",
      //   fc: "115 Grm",
      //   stag: "23269, 23269, Massa Rib, 1/1 top",
      //   total: '9,000',
      //   images: [
      //     "images/c5.jpg",
      //     "images/c5.jpg",
      //     "images/c5.jpg",
      //   ],
      //   styleid: '#95185',
      //   colors: [
      //     { id: 1, name: 'skyblue', img: "images/c5.jpg", isSelected: true },
      //     { id: 2, name: 'white', img: "images/c5.jpg", isSelected: true },
      //     { id: 3, name: 'mediumpurple', img: "images/c5.jpg", isSelected: true },
      //   ],
      //   sizes: [
      //     {
      //       id: 1, name: "S", isSelected: true
      //     },
      //     {
      //       id: 2, name: "M", isSelected: true
      //     },
      //     {
      //       id: 3, name: "L", isSelected: true
      //     },
      //     {
      //       id: 4, name: "XL", isSelected: true
      //     },
      //     {
      //       id: 5, name: "XXL", isSelected: true
      //     },
      //     {
      //       id: 6, name: "Free", isSelected: true
      //     },
      //   ],
      // },
    ],
    isLive: true,
    suppliers: [],
    jobWorks: [],
    stocks: [],
    purchases: [],
    markets: [],
    skus: [],
    catalogSku: []
  },
  getters: {
    getOrder(state) {
      return state.order
    },
    getPayment(state) {
      return state.payment
    },
    getDelivery(state) {
      return state.delivery
    },
    getFabricator(state) {
      return state.fabricator
    },
    getSupplier(state) {
      return state.supplier
    },
    getCustomer(state) {
      return state.customer
    },
    getMembers(state) {
      return state.members
    },
    // -------------------------------
    getSuppliers(state) {
      return state.suppliers
    },
    getIsLive(state) {
      return state.isLive;
    },
    getStatus: (state) => (state.isLive ? 'Live' : 'Draft'),
    getDatas(state) {
      return state.datas
    },
    getDatapps(state) {
      return state.datapps
    },
    getCards(state) {
      return state.cards
    },
    getLists(state) {
      return state.lists
    },
    getList: (state) => (listId) => {
      let index = state.lists.findIndex(list => list.id == listId);
      return state.lists[index];
    },
    // getSupplier: (state) => (sId) => {
    //   let index = state.suppliers.findIndex(s => s.id == sId);
    //   return state.suppliers[index];
    // },
    getMarkets(state) {
      return state.markets
    },
    getSkus(state) {
      return state.skus
    },
    getjobWorks(state) {
      return state.jobWorks
    },
    getStocks(state) {
      return state.stocks
    },
    getPurchases(state) {
      return state.purchases
    },
    getCatalogSku: state => state.catalogSku
  },
  mutations: {
    addToOrder(state, data) {
      state.order.push(data)
    },
    addToPayment(state, data) {
      state.payment.push(data)
    },
    addToDelivery(state, data) {
      state.delivery.push(data)
    },
    addToFabricator(state, data) {
      state.fabricator.push(data)
    },
    addToSuppliers(state, data) {
      state.supplier.push(data)
    },
    addToCustomer(state, data) {
      state.customer.push(data)
    },
    addToMembers(state, data) {
      state.members.push(data)
    },
    // --------------------------------------------------
    toggleIsLive(state) {
      state.isLive = !state.isLive;
    },
    Jobwork(state, data) {
      state.jobWorks = data
    },
    setSuppliers(state, data) {
      state.suppliers = data
    },
    setStock(state, data) {
      state.stocks = data
    },
    setPuchase(state, data) {
      state.purchases = data
    },
    setMarket(state, data) {
      state.markets = data
    },
    setSku(state, data) {
      state.skus = data
    },
    addToSupplier(state, data) {
      state.suppliers.push(data)
    },
    setCatalogSku(state, data) {
      state.catalogSku = data
    }
  },
  actions: {
    addToOrder({ commit }, data) {
      commit('addToOrder', data)
    },
    addToPayment({ commit }, data) {
      commit('addToPayment', data)
    },
    addToDelivery({ commit }, data) {
      commit('addToDelivery', data)
    },
    addToFabricator({ commit }, data) {
      commit('addToFabricator', data)
    },
    addToSuppliers({ commit }, data) {
      commit('addToSuppliers', data)
    },
    addToCustomer({ commit }, data) {
      commit('addToCustomer', data)
    },
    addToMembers({ commit }, data) {
      commit('addToMembers', data)
    },
    // ----------------------------------------
    fetchJobWorks({ commit }) {
      axios.get('http://192.168.1.133:8001/api/purchaseorders')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('Jobwork', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again');
          }
        })
        .catch((error) => { console.error('fetchJobWorks:', error) })
    },
    // fetchJobWorks({commit}, data){
    //   commit('Jobwork', data)
    // },
    fetchSuppliers({ commit }) {
      axios.get('http://192.168.1.133:8001/api/suppliers')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setSuppliers', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again');
          }
        })
        .catch((error) => { console.error('fetchSuppliers:', error) })
    },
    fetchStocks({ commit }) {
      axios.get('http://192.168.1.133:8001/api/stocks')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setStock', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again');
          }
        })
        .catch((error) => { console.error('fetchStocks:', error) })
    },
    fetchPurchase({ commit }) {
      axios.get('http://192.168.1.133:8001/api/purchases')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setPuchase', response.data.data)
          }
          else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again')
          }
        })
        .catch((error) => { console.error('fetchPurchase:', error) })
    },
    fetchMarket({ commit }) {
      axios.get('http://192.168.1.133:8001/api/ds/products')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setMarket', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again')
          }
        })
        .catch((error) => { console.error('fetchJobWorks:', error) })
    },
    fetchSku({ commit }) {
      axios.get('http://192.168.1.133:8001/api/ds/product_skus')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setSku', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again')
          }
        })
        .catch((error) => { console.error('fetchSku:', error) })
    },
    fetchCatalogSku({ commit }) {
      axios.get('http://192.168.1.133:8001/api/stocks?type=sku')
        .then(response => {
          if (response.data.status === 'ok') {
            commit('setCatalogSku', response.data.data)
          } else if (response.data.status === 'error') {
            alert(response.data.message);
          } else {
            alert('Something went wrong! Please try again')
          }
        })
        .catch((error) => { console.error('fetchSku:', error) })
    },
    addToList({ commit }, data) {
      commit('addToList', data)
    },
    addToSupplier({ commit }, data) {
      commit('addToSupplier', data)
    },
  },
  modules: {},
});
