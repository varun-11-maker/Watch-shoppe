import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
        <div className='container fluid p-3 m-3'>
            <div className='row'>
                <div classname='col-md-3'>
                    <UserMenu/>
                </div>
                <div classname='col-md-9'>
                    <h1>All orders</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Orders