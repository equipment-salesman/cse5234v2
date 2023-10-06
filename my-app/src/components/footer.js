
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => ( 
  
  <Footer  className='footer'
  onClick
  autoFocus
  columns={[
    {
      title: 'contact us',
      items: [
        {
          title: 'address',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'email',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'phone',
          url: 'https://ceo/',
          openExternal: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: 'more info',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: 'DFARS',
          url: 'https://www.acquisition.gov/dfars',
          description: 'Read about DFARS',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: 'Arms Export Control Act',
          url: 'https://en.wikipedia.org/wiki/Arms_Export_Control_Act#:~:text=The%20AECA%20requires%20that%20each,to%20an%20escalation%20of%20conflict.',
          description: 'Read about AECA',
          openExternal: true,
        },
      ],
    },
  ]}
/>

);


export default () => <SampleFooter />;