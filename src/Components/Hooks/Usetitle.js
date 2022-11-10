import { useEffect } from 'react';

const Usetitle = title => {

     useEffect (()=>{

          document.title=`${title}- Gulshan Travels`;

     },[title])

  
};

export default Usetitle;