import { discoverMoreData } from './homepageData';
import { Link } from 'react-router-dom';
const DiscoverSection = () => {
  
 
  return (
    <div className='discover-section mt-8'>
        <h1 className='text-4xl font-bold text-center md:text-left'>Discover</h1>
        <div className="text-center bg-orange-500 w-24 h-2 mx-auto my-5 block md:text-left md:mx-0"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {discoverMoreData.map((data) => {
            const {id, src, category} = data;
            return(
                <div key={id} className='my-5 flex flex-col items-center'>
                    <img src={src} alt="" className='w-3/4 md:w-full'/>
                    <p className='font-bold'>{category}</p>
                    <div>
                        <button className='text-orange-500 font-bold'><Link to="products">Explore More</Link></button>
                    </div>
                    
                </div>
            )
        })}
    </div>
    </div>
    
  )
}

export default DiscoverSection