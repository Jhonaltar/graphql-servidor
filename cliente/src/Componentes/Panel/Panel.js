import React,{Fragment} from 'react'

import Clientes from './Clientes';

const Panel =() => {
   
        return (
          <Fragment>
              <h1 className="text-center my-5">Top 10 clientes que mas compran</h1>
              <Clientes/>
          </Fragment>
        )
}

export default Panel;
