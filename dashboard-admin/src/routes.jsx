import NewUser from "./pages/NewUser/NewUser"
import Product from "./pages/ProductId/Product"
import UserList from "./pages/Users/UserList"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"



let routes = [
    {path:'/', element:<Home/>},
    {path:'/users', element:<UserList/>}, 
    {path:'/newUser', element:<NewUser/>},
    {path:'/products', element:<Products/>},
    {path:'/product/:id', element:<Product/>},

   
]
export default routes