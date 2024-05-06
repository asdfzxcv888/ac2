import {createContext,useContext,useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
let x=setTimeout(() => {
  
}, 0);
let i=0

const AppContext=createContext()

const AppProvider=({children})=>{
  const ww=localStorage.getItem('user');

  

  
    const [products, setProducts] = useState([]);

    const[user,setuser]=useState(ww?JSON.parse(ww):{})
    const [colo,setcolo]=useState(true)


    const[alert,setalert]=useState(false)
    const togglealert=()=>{
      if(x){clearTimeout(x)}
      setalert(true)
      
     x= setTimeout(()=>setalert(false),2000)
    }
    const closealert=()=>{
      setalert(false)
    }


    const [cart,setcart]=useState([])


    const addtocart=(item)=>{
      let newit=cart.filter(item1=>item1.id===item.id)
      if(newit.length>0){
        setcart(cur=>cur.map(z=>{if(z.id===item.id){z.quantity++}
        return z
      }))

      return
      }
      else{
        newit=item
        newit.quantity=1
      }
      setcart(cur=>[...cur,newit])
      

    }

    const handleIncreaseQuantity=(arg)=>{
      setcart(cur=>cur.map(item=>{
        if(item.id===arg){
          item.quantity++
        }
        return item
      }))
    }
    const handleDecreaseQuantity=(arg)=>{
      setcart(cur=>cur.map(item=>{
        if(item.id===arg){
          item.quantity--
          if(item.quantity===0){return null}
        }
        return item
      }).filter(Boolean))
    }


    const handleRemoveItem=(arg)=>{
      setcart(cur=>cur.filter(item=>item.id!==arg))

    }
    const[selectedproduct,setselectedproduct]=useState({})
 


    
    const [loading, setLoading] = useState(true);
    const[alertmsg,setalertmsg]=useState('')


    const setsp=(id)=>{
      try {
        
        const sp=products.filter(item=>item.id===id)
        setselectedproduct(sp[0])
       
        
      } catch (error) {
        console.log(error);
        
      }
     

    }


      const [searchedproducts,setsearchedproducts]=useState([])


      const search=(arg)=>{
        const arr=products
        arg=arg.replace(/[^a-zA-Z0-9\s]/g, ''); 
        const regex = new RegExp(arg, 'i'); 

        setsearchedproducts(arr.filter((item)=>regex.test(item.title)))
      }


      

    




   
  
    useEffect(() => {
      console.log('eff called');
      const fetchProducts = async () => {
        try {
          const response = await fetch("/api/products/5");
        
          const data = await response.json();
          console.log(data);
          setProducts(data.prod);
          setsearchedproducts(data.prod)
          setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false); // Set loading to false if there's an error
        }
      };
  
      fetchProducts();
    }, []); 



    return <AppContext.Provider value={{products,loading,setsp,selectedproduct,addtocart,cart,
    alert,togglealert,alertmsg,setalertmsg,handleDecreaseQuantity,handleIncreaseQuantity,handleRemoveItem,closealert,user,setuser,
    search,searchedproducts,colo,setcolo}}>{children}</AppContext.Provider>

}


const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,useGlobalContext}