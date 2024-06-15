import React,{axios} from 'react'

const Fetchdata = () => {
   
    const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://furni-flex-4-yx74.onrender.com/${category}`);
        console.log(response.data)
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div>
      
    </div>
  )
}

export default Fetchdata
