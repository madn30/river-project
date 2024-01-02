import React from 'react';
import './Orders.css';
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import Tabs, { Tab } from '../../components/Tabs';
import Container from '../../components/Container/Container';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import SearchInput from '../../components/SearchInput/SearchInput';

const Orders = () => {
    return (
        <Container>
            <section className='orders-wrapper'>
                <div className='order-details'>
                <h2>עמוד הזמנות</h2>
                <p>בעמוד זה יוצגו דוחות על ההזמנות שהסוכן ביצע כולל דו״ח כספי</p>
                </div>
                <Tabs>
                    <Tab label="טיסות" icon={<MdFlight />}>
                        <form>
                            <div className='top-section'>
                                <DateRangePicker title={'תאריך הזמנה'}/>
                                <DateRangePicker title={'תאריכי טיסה'}/>
                            </div>
                            <div className='divider' />
                            <div className='bottom-section'>
                                <SearchInput title={'חברת התעופה'} width={200}/>
                                <SearchInput title={'איש קשר ראשי'}/>
                                <SearchInput title={'מספר הזמנה'}/>
                            </div>
                        </form>
                    </Tab>
                    <Tab label="מלונות" icon={<FaHotel />}>
                        Content for Hotels
                    </Tab>
                    <Tab label="טיסה + מלון" icon={<TbBrandBooking />}>
                        Content for Flights and hotels
                    </Tab>
                    <Tab label="חבילות" icon={<MdOutlineFamilyRestroom />}>
                        Content for packages
                    </Tab>
                </Tabs>
            </section>
        </Container>
    )
}

export default Orders