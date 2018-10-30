import itemDetails from '../components/views/itemDetails'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'


export const routes = [
  {
    path:'',
    component: Inventory
  },
  {
    path:'/item/:id',
    component: itemDetails
  }

]
